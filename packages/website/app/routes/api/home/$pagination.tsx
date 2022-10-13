import type { LoaderFunction } from '@remix-run/server-runtime'
import type { IArticleBox } from '~/types/articleBox'

import { db } from '~/utils/db.server'


export const loader: LoaderFunction = async ({ params }) => {
	const index = parseInt(params.pagination as string)||0
	const data = await getData(index)
	console.log(data)
	return data
}

const getData = async (myCursor:number) => {
	const data: IArticleBox[] = await db.articleBox.findMany({
		take:6,
		cursor: {
			id: myCursor,
		},
		select: {
			id: true,
			type:true,
			name: true,
			title: true,
			content: true,
			createTime: true,
		},
		orderBy:{
			id:'desc'
		}
	})
	
	return data

}