import type { LinksFunction, MetaFunction } from '@remix-run/server-runtime'

import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import resetCssUrl from '@unocss/reset/tailwind.css'
import { ExternalScripts } from 'remix-utils'

import HeaderNav from '~/components/headerNav'
import unoCssUrl from '~/styles/uno.css'
import textCssUrl from '~/styles/typo.css'
import globalStyles from './styles/global.css'
import HeaderNav from './components/headerNav'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: resetCssUrl,
		},
		{
			rel: 'stylesheet',
			href: unoCssUrl,
		},
		{
			rel: 'stylesheet',
			href: globalStyles,
		},
		{ 	rel: "stylesheet",
		 	href: textCssUrl 
		}
	]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'IOLab 2022',
	viewport: 'width=device-width,initial-scale=1',
})
export const handle = {
	breadcrumb: () => <Link to="/">IO-Club</Link>,
  };
export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen" w-flex="col" w-justify='center' w-p="0" w-m="0">
				<HeaderNav/>
				<Outlet />
				<ScrollRestoration />
				<ExternalScripts />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
