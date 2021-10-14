import type {Meta} from '@ioclub/mdvue'

import {useI18n} from '@ioclub/composable'
import Menu from 'virtual:icons/mdi-light/menu'
import {defineComponent, provide, reactive, ref} from 'vue'

import MdMenu from '~/components/generater/mdmenu'
import Link from '~/components/link'
import Logo from '~/components/logo'

export default defineComponent({
	props: {
		aside: {
			type: Boolean,
			default: false,
		},
		article: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, {slots}) {
		const {i18n} = useI18n()

		const sidebar = ref(false)
		const meta = reactive<Meta>({})
		const updateMeta = (n: Meta) => {
			meta.frontmatter = n.frontmatter
			meta.toc = n.toc
		}
		provide('md_update_meta', updateMeta)

		return () => {
			const {header, title} = i18n.value.common

			const content = function () {
				if (props.article) {
					return <article
						class="prose"
						w:transition="~ all duration-200"
						w:p="4"
					>
						{slots.default ? slots.default() : null}
					</article>
				} else {
					return <div>{slots.default ? slots.default() : null}</div>
				}
			}()

			const aside = function () {
				if (props.aside) {
					return <button type="button" onClick={() => sidebar.value = !sidebar.value}>
						<Menu w:text="2xl" />
					</button>
				} else {
					return <Link to="/">{() => header.home}</Link>
				}
			}()

			return <div>
				<div w:pos="relative">
					<aside
						w:pos={`absolute ${sidebar.value ? 'left-0': '-left-full'}`}
						w:transition="~ all duration-200"
						w:w="3/5 sm:1/2 md:1/3"
						w:h="full"
					>
						<div w:pos="sticky top-14">
							<ul>
								<li>
								</li>
								<li>
									<MdMenu toc={{}} />
								</li>
							</ul>
						</div>
					</aside>
					<main
						w:m={sidebar.value ? 'l-3/5 sm:l-1/2 md:l-1/3': ''}
						w:transition="~ all duration-200"
					>
						<nav
							w:h="14"
							w:bg="white"
							w:pos="sticky top-0"
							w:z="10"
						>
							<ul
								w:p="y-3 x-oi-4 x-os-6 x-o"
								w:flex="~"
								w:justify="between"
								w:align="items-center"
							>
								<li>
									{aside}
								</li>
								<li w:transform="hover:scale-110" w:display="<sm:hidden">
									<Link to="/t">{() => header.notice}</Link>
								</li>
								<li>
									<Link w:flex="~" w:align="items-center" to="/" >{() => [
										<Logo w:text="2xl" />,
										<span w:text="2xl" w:font="heavy" w:display="<md:hidden">{title}</span>,
									]}</Link>
								</li>
								<li w:text="gray-400" w:display="<sm:hidden">
									<Link to="#">{() => header.forum}</Link>
								</li>
								<li w:text="gray-400" w:display="<sm:hidden">
									<Link to="#">{() => header.login}</Link>
								</li>
							</ul>
						</nav>
						{content}
					</main>
					<div
						w:bg="gray-800"
						w:h="min-20"
						w:text="white"
						w:flex="~"
						w:align="items-center"
						w:justify="center"
					>
						<p>By &copy; 2021 I/O club All rights reserved</p>
					</div>
				</div>
			</div>
		}
	},
})