import { Outlet } from '@remix-run/react'

export const handle = {
	breadcrumb: () => <div>Article</div>,
}
const article = () => {
	return (
		<div className='min-h-screen'>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default article