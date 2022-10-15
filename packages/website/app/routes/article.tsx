import { Outlet } from '@remix-run/react'


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