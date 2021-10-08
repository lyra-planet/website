import type {Meta, TocEntry} from '@ioclub/mdvue'

import { defineComponent, provide, reactive } from 'vue'

import DefaultMd from './default_md'
// import {article} from "windicss/plugin/typography"
import MdMenu from '~/components/generater/mdmenu'
import MdSidebar from '~/components/generater/mdsidebar'
export default defineComponent({
	props: {'name': String},
	setup(_, {slots}) {
		const meta: Meta = reactive({})
		const updateMeta = (n: Meta) => {
			meta.frontmatter = n.frontmatter
			meta.toc = n.toc
		}
		const handleScroll = () => {
			// 设备/屏幕高度
			let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
			// 滚动区域到头部的距离
			// let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

			let header = document.getElementById("header")?.getBoundingClientRect().bottom
			if (header >= 0) {
				document.getElementById("leftnav")?.style.setProperty("top", header + "px")
				document.getElementById("rightmenu")?.style.setProperty("top", header + "px")
			} else {
				document.getElementById("leftnav")?.style.setProperty("top", "0px")
				document.getElementById("rightmenu")?.style.setProperty("top", "0px")
			}
			
			let footer = document.getElementById("copyright")?.getBoundingClientRect().top
			if (clientHeight - footer >= 0) {
				document.getElementById("leftnav")?.style.setProperty("bottom", clientHeight - footer + "px")
				document.getElementById("rightmenu")?.style.setProperty("bottom", clientHeight - footer + "px")
			} else {
				document.getElementById("leftnav")?.style.setProperty("bottom", "0px")
				document.getElementById("rightmenu")?.style.setProperty("bottom", "0px")
			}

		}
		onMounted(() => {
			// 监听滚动事件，然后用handleScroll这个方法进行相应的处理
			window.addEventListener('scroll', handleScroll)
		})
		onBeforeUnmount(() => {
			window.removeEventListener('scroll', handleScroll)
		})
		provide('md_update_meta', updateMeta)
		const el = ref(null)
		return () => <DefaultMd>
			{() => {
				const ret = []
				ret.push(
					<div class="grid grid-cols-[1fr,4fr] grid-rows-1">
						<div class="border-r">
							<div id="leftnav" 
							class="fixed overflow-y-auto w-20/100 px-4 " 
							style="top: 90px; bottom: 0px">
								<div class={`flex my-4`}>
									<div>⚡ </div>
									<div class="flex-grow">
										<div>
											<span>What's Happing</span>	
										</div>
										<div class="text-sm text-gray-400">
											<span>latest update 3 minutes before</span>	
										</div>
									</div>
								</div>	
								<MdSidebar/>
							</div>
						</div>
						<div>
							<div class="w-full grid grid-cols-[3fr,1fr]">
								<div class="mx-auto pt-7">
									<article  class="prose">
										{slots.default ? slots.default() : null}
									</article>
								</div>
								<div class="fixed bg-gray-50 overflow-y-auto w-20/100 text-sm px-3 
								rounded-md mb-4 p-4 max-w-sm w-full mx-auto" 
								id="rightmenu" 
								style="top: 90px; bottom: 0px; right:0px">
									<div class="my-3 text-sm"  
									style="text-align:center">
										<span># Document Menu </span>
									</div>
									<MdMenu toc={meta.toc?.at(0)} />
								</div>
							</div>
						</div>
					</div>
				)
				return ret
			}}
		</DefaultMd>
	}
})
