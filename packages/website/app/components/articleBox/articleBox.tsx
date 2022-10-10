import type { IArticleBox } from '../../types/articleBox'

import { Link } from '@remix-run/react'

import AvatarUrl from '../../temporary/avatar.jpg'

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
					{'>'}
					<Link className="article-header hover:bg-transparent" w-text="50px"  to={`/article/${data?.id}`} >
						{data?.title}
					</Link>
				</h1>
			</div>
			<div className="bottom" w-grid="~ cols-[30%70%]">
				<div className="left">
					<ul>
						<li className="avatar" w-h='90px'>
							<img w-border="rounded-full" w-w="80px" src={AvatarUrl} alt="avatar" />
						</li>
						<li className="createTime flex items-center" w-display="block"  w-h="30px">
							<div className="i-ant-design-user-outlined text-2xl text-gray-400 inline-block" />
							Create:{(data?.createTime as unknown as string).match(/^\d{4}-\d{1,2}-\d{1,2}/)}
						</li>
						<li className="type flex items-center">
							<div className="i-bx-box text-2xl text-gray-400 inline-block" />
							<div className="inline-block" >Type:{data?.type}</div>
						</li>
						<li className="visit flex items-center">
							<div className="i-akar-icons-heart text-2xl text-gray-400 inline-block" />
							Visitors:100
						</li>
					</ul>
				</div>
				<div className="right">
					<p w-text="gray-900 20px">
						{data?.content}
						<Link to={'/'}>Read More</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
