import type {
    LoaderFunction,
    LinksFunction 
  } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { db } from "~/utils/db.server";
import {  IArticle } from "~/types/articleBox";
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import stylesUrl from '~/styles/typo.css'
import { marked } from "marked";
export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };
export const loader: LoaderFunction = async ({
    params,
  }) => {
    const data = await getData(parseInt(params.articleId as string))
    return json(data)
};
const getData = async (articleBoxId: number = 1) => {
    const articleData: IArticle = await db.articleBox.findUnique({
      where: {
        id: articleBoxId,
      },
      select: {
        id: true,
        type:true,
        data:true,
        name: true,
        title: true,
        content: true,
        createTime: true,
      },
    });
    return articleData;
  };
export default function articlePage() {
    const pageData = useLoaderData<IArticle>()
    useEffect(()=>{
        const articleDataContainer = document.getElementById('article-data-container')
        if(articleDataContainer&&pageData?.data){
            articleDataContainer.innerHTML = marked(pageData?.data)
        }
    },[])
    return (
      <div w-text="black">
        <p>{pageData?.title}</p>
        <div id="article-data-container" w-w="100vw">
            {/* {pageData?.data} */}
        </div>
      </div>
    );
  }