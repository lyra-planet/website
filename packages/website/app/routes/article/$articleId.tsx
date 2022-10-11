import type { LoaderFunction  } from '@remix-run/server-runtime'
import type {  IArticle } from '~/types/articleBox'

import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/server-runtime'
import { marked } from 'marked'
import { useEffect } from 'react'

import { db } from '~/utils/db.server'

export const loader: LoaderFunction = async ({
	params,
}) => {
	const data = await getData(parseInt(params.articleId as string))
	return json(data)
}
const getData = async (articleBoxId = 1) => {
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
	})
	return articleData
}
export default function ArticlePage() {
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
			<div id="article-data-container" w-w="60vw">
			</div>
		</div>
	)
}