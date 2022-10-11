import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import presetDaisy from 'unocss-preset-daisy'
import { presetScalpel } from 'unocss-preset-scalpel'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
	rules:[
		['home-top-img',{background: 'url(https://hsiaofongw.notion.site/images/page-cover/rijksmuseum_jansz_1641.jpg) fixed 100%;'}],
		['slideIn',{animation: 'slide-in 1s ease-in-out 1;'}],
		['slide-underline',{content:'""',
			display:'block',
			width: '0%;',
			height: '4px;',
			background: 'gray;',
			transition: 'all 0.3s;'}],
		['keyframes-slide-in',{}]
	],
	transformers: [
		transformerDirectives(),
	],
	presets: [
		presetUno(),
		presetAttributify({
			prefix: 'w-',
		}),
		presetTypography(),
		presetIcons(),
		presetWebFonts(),
		presetRemToPx,
		presetScalpel(),
		presetScrollbar(),
		presetDaisy(),
		presetHeroPatterns(),
	],
	shortcuts: [],
})
