
import type { MetaFunction } from '@remix-run/server-runtime'
import type { IArticleBox } from '~/types/articleBox'

import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { useHydrated } from 'remix-utils'

import { ArticleBox } from '~/components/articleBox/articleBox'

export const meta: MetaFunction = () => ({
	title: 'Home',
})

export const handle = {
	breadcrumb: () => <div>Home</div>,
}

const Home=()=> {
	const fetcher = useFetcher()
	const [active, setActive] = useState(0)
	const cursor = useRef(10)
	const articleBoxList= useRef<IArticleBox[]>([])
	const [newArticleData,setNewArticleData] = useState<IArticleBox[]|null>(null)
	const [end, setEnd] = useState(false)
	const sentry = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		(async()=>{
			if(end===true){
				return
			}
			await fetcher.load(`/api/home/${cursor.current}`)
			if (fetcher.data === undefined) {		
				return
			}
			if(fetcher.type==='done'){
				let newData = []	
				if (fetcher.data.length === 6) {
					newData = fetcher.data.slice(0, fetcher.data.length - 1)
					setNewArticleData(newData)
					cursor.current = fetcher.data[5].id
				} else {
					setEnd(true)
					newData = fetcher.data
					
				}
				if(!newArticleData){
					return
				}
				articleBoxList.current = articleBoxList.current.concat(newArticleData)
			}
		})()
	}, [active])


	useEffect(() => {
		let newActive = active
		const intersectionObserver = new IntersectionObserver(function (entries) {
			if (entries[0].intersectionRatio > 0) {
				newActive += 1
				console.log(newActive)
				setActive(newActive)
				console.log(fetcher.type)
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
	
	return (
		<div className="w-screen min-h-screen">
			<div className="h-3xl w-100vw mb-20 home-top-img "></div>
			<div className="mx-auto mb-300px" w-w="1024px">
				<h1 w-text="60px">探索IOClub首页</h1>
				<p>MemberList</p>
				<div>
					{articleBoxList &&
            articleBoxList.current.map((articleBox) =>articleBox && (<ArticleBox key={articleBox.id} data={articleBox} />)
            )}
				</div>
			</div>
			{end ? <div>END</div> : ''}
			<div
				className="article-box-list-sentry"
				ref={sentry}
				w-h="300px"
				w-text="black center"
				w-align="middle"
			>
			</div>
		</div>
	)
}
const Component=()=>{
	const isHydrated = useHydrated()

	if (isHydrated) {
		return <Home/>
	}
}
export default Component