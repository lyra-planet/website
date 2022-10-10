import { Link, Outlet } from "@remix-run/react";
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState, useCallback } from 'react';
import { db } from "~/utils/db.server";
import { ArticleBox } from "~/components/articleBox/articleBox";
import stylesUrl from "~/styles/articleBox.css";
import { IArticleBox } from "~/types/articleBox";

export const meta: MetaFunction = () => ({
  title: "Home",
});

export const handle = {
  breadcrumb: () => <Link to="/home">Home</Link>,
};

export const loader: LoaderFunction = async ({ request }) => {
  const index =
    parseInt(new URL(request.url).searchParams.get("index") as string) || 0;
  const data = await getData(index);
  return json(data);
};
const getData = async (articleBoxId: number = 1) => {
  const data: IArticleBox = await db.articleBox.findUnique({
    where: {
      id: articleBoxId,
    },
    select: {
      id: true,
      type:true,
      name: true,
      title: true,
      content: true,
      createTime: true,
    },
  });
  return data;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Home() {
  const fetcher = useFetcher();
  const [index, setIndex] = useState(0);
  const [articleBoxList, setArticleBoxList] = useState<IArticleBox[]>([]);
  const [newData, setNewData] = useState({});
  const [end,setEnd] = useState(false)
  useEffect(() => {
    fetcher.load(`/home?index=${index}`);
  }, [index]);
  useEffect(() => {
    if (fetcher.data == undefined) {
      setEnd(true)
      return;
    }
    setEnd(false)
    setNewData(fetcher.data);
    const newArticleBoxList = articleBoxList;
    newArticleBoxList.push(fetcher.data);
    setArticleBoxList(newArticleBoxList);
  }, [fetcher.data]);
  useEffect(() => {
    intersectionObserverFunc();
  }, [newData]);
  const intersectionObserverFunc = () => {
    let newIndex = index;
    const articleBoxListSentry = document.querySelector(".article-box-list-sentry") as Element;
    let intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio > 0) {
        newIndex += 1;
        setIndex(newIndex);
        intersectionObserver.unobserve(articleBoxListSentry);
      }
    });
    intersectionObserver.observe(articleBoxListSentry);
  };

  return (
    <div className="home-container w-screen  min-h-screen">
      <div className="top h-3xl w-100vw mb-20 home-top-img ">
      </div>
      <div className="mx-auto mb-300px" w-w="1024px">
        <h1 w-text="60px">探索IOClub首页</h1>
        <p>MemberList</p>
        <div>
          {articleBoxList &&
            articleBoxList.map((articleBox) => (
              articleBox&&<ArticleBox key={articleBox.id} data={articleBox}/>
            ))}
        </div>
      </div>
      <div
        className="bottom article-box-list-sentry"
        w-h="300px"
        w-text="black center"
        w-align="middle"
      >{end?'END':''}</div>
    </div>
  );
}
