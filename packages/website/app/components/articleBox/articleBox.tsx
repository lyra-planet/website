import type { IArticleBox } from '../../types/articleBox'

import { Link } from '@remix-run/react'

import AvatarUrl from '../../temporary/avatar.jpg'

export const ArticleBox = ({ data }: { data:IArticleBox }) => {
	return (
		<div className=" slideIn" 
			w-border-b='0.1rem solid gray'
			w-mt='2rem'
			w-w="full" 
			w-h="30rem" 
			w-grid="~ rows-[20%80%]">
			<div>
				<h1 w-display="inline-block after:display-block" w-text="3rem" w-h='10rem' >
					{'>'}
					<Link w-hover="bg-transparent decoration-none after:w-full" w-after="slide-underline"
						w-text="3rem"
						to={`/article/${data?.id}`} >
						{data?.title}
					</Link>
				</h1>
			</div>
			<div w-grid="~ cols-[30%70%]">
				<div>
					<ul>
						<li w-h='6rem'>
							<img w-border="rounded-full" w-w="6rem" src={AvatarUrl} alt="avatar" />
						</li>
						<li className="flex items-center"  w-h="2rem">
							<div className="i-ant-design-user-outlined text-2xl text-gray-400 inline-block" />
							Create:{(data?.createTime as unknown as string).match(/^\d{4}-\d{1,2}-\d{1,2}/)}
						</li>
						<li className="flex items-center" w-h="2rem">
							<div className="i-bx-box text-2xl text-gray-400 inline-block" />
							<div className="inline-block" >Type:{data?.type}</div>
						</li>
						<li className="flex items-center" w-h="2rem">
							<div className="i-akar-icons-heart text-2xl text-gray-400 inline-block" />
							Visitors:100
						</li>
					</ul>
				</div>
				<div>
					<p w-text="gray-800 20px">
						{data?.content}
						<Link to={`/article/${data?.id}`} >Read More</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
