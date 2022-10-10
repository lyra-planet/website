import { Link, Outlet } from '@remix-run/react'

export const handle = {
	breadcrumb: () => <Link to=''>Article</Link>,
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