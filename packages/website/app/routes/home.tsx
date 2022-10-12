
import type { MetaFunction } from '@remix-run/server-runtime'
import type { IArticleBox } from '~/types/articleBox'

import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'

import { ArticleBox } from '~/components/articleBox/articleBox'

export const meta: MetaFunction = () => ({
	title: 'Home',
})

export const handle = {
	breadcrumb: () => <div>Home</div>,
}

export default function Home() {
	const fetcher = useFetcher()
	const [active, setActive] = useState(0)
	const cursor = useRef(10)
	const [articleBoxList, setArticleBoxList] = useState<IArticleBox[]>([])
	const [end, setEnd] = useState(false)

	const sentry = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		let newActive = active
		const intersectionObserver = new IntersectionObserver(function (entries) {
			if (entries[0].intersectionRatio > 0) {
				newActive += 1
				setActive(newActive)
			}
		})
		if (sentry.current) {
			intersectionObserver.observe(sentry.current)
		}	
		return () => {
			sentry.current = null
			if (sentry.current) {
				intersectionObserver.unobserve(sentry.current)
			}	
		}
	}, [])
	useEffect(() => {
		if(end===true){
			return
		}
		fetcher.load(`/api/home/${cursor.current}`)
	}, [active])
	useEffect(() => {
		let newData = []
		if (fetcher.data === undefined) {		
			return
		}
		if (fetcher.data.length === 6) {
			newData = fetcher.data.slice(0, fetcher.data.length - 1)
			cursor.current = fetcher.data[5].id
		} else {
			setEnd(true)
			newData = fetcher.data
		}
		const newArticleBoxList = articleBoxList.concat(newData)
		setArticleBoxList(newArticleBoxList)
	}, [fetcher.data])
	
	return (
		<div className="w-screen min-h-screen">
			<div className="h-3xl w-100vw mb-20 home-top-img "></div>
			<div className="mx-auto mb-300px" w-w="1024px">
				<h1 w-text="60px">探索IOClub首页</h1>
				<p>MemberList</p>
				<div>
					{articleBoxList &&
            articleBoxList.map((articleBox) =>articleBox && (<ArticleBox key={articleBox.id} data={articleBox} />)
            )}
				</div>
			</div>
			<div
				className="article-box-list-sentry"
				ref={sentry}
				w-h="300px"
				w-text="black center"
				w-align="middle"
			>
				{end ? <div>END</div> : ''}
			</div>
		</div>
	)
}
