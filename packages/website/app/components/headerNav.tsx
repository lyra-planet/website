import { Link, useMatches } from '@remix-run/react'
import uuid from 'react-uuid'


const HeaderNav = () => {
	const matches = useMatches()
	return (
		<div className="headernav top-0 sticky justify-between flex bg-white items-center py-3 px-2">
			<div className="left flex">
				{matches
					.filter((match) => match.handle && match.handle.breadcrumb)
					.map((match, index) => (
						<div className="flex" key={uuid()}>
							<li>{match.handle?.breadcrumb(match)}</li>
							{index >= matches.length ? (
								' '
							) : (
								<li className="breadcrumb">/</li>
							)}
						</div>
					))}
			</div>
			<div className="right flex">
				<li className="search">
					<button className="button"><div className="i-carbon-search text-2xl text-gray-400 inline-block" />Search</button>   
				</li>
				<li className="login">
					<Link to="/login"><button className="button"><div className="i-ant-design-user-outlined text-2xl text-gray-400 inline-block" />LogIn</button></Link>
          
				</li>
			</div>
		</div>
	)
}

export default HeaderNav
