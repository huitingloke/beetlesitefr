import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/huitingloke',
				linkedin: 'https://www.linkedin.com/in/bethloke/'
			},
			customCss: [
				'./src/style.css'
			],
			sidebar: [
				{
					label: 'main',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/main/introduction/' },
						{ label: 'skills', link: '/main/skills/' }
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
