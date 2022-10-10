import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { AiFillCalendar, AiFillDatabase, AiFillHeart } from "react-icons/ai";
import AvatarUrl from "../../temporary/avatar.jpg"
import { IArticleBox } from '../../types/articleBox';
export const ArticleBox = ({ data }: { data:IArticleBox }) => {
  return (
    <div className="article-container slideIn" 
    data-wow-duration="1s" 
    data-wow-delay="1s" 
    data-wow-iteration="1s"
    w-w="full" 
    w-h="30vh" 
    w-grid="~ rows-[20%80%]">
      <div className="top">
        <h1 className="article-h1" w-display="inline-block after:display-block" w-text="50px" >
          {`>`}
          <Link className="article-header hover:bg-transparent" w-text="50px"  to={`/article/${data?.id}`} >
           {data?.title}
          </Link>
        </h1>
      </div>
      <div className="bottom" w-grid="~ cols-[30%70%]">
        <div className="left">
          <ul>
            <li className="avatar">
              <img w-border="rounded-full" w-w="80px" src={AvatarUrl} alt="avatar" />
            </li>
            <li className="createTime align-middle " w-display="block"  w-h="30px">
              <AiFillCalendar />
              Create:{(data?.createTime as unknown as string).match(/^\d{4}-\d{1,2}-\d{1,2}/)}
            </li>
            <li className="type align-middle">
              <AiFillDatabase />
              Type:{data?.type}
            </li>
            <li className="visit align-middle">
              <AiFillHeart/> 
              Visitors:100
            </li>
          </ul>
        </div>
        <div className="right">
          <p w-text="gray-900 20px">
            {data?.content}
          <Link to={`/`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
