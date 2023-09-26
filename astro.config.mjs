import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'beth',
			social: {
				github: 'https://github.com/huitingloke',
				linkedin: 'https://www.linkedin.com/in/bethloke/'
			},
			customCss: [
				'./src/style.css',
				'./src/fonts/font-face.css' //for fonts also please
			],
			sidebar: [
				{
					label: 'main',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/main/introduction/' },
						{ label: 'skills', link: '/main/skills/' },
						{ label: 'education', link: '/main/education/' }
					],
				},
				{
					label: 'projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/projects/introduction/' },
						{ label: 'automation', link: '/projects/automation/' }
					], 
				},
				{
					label: 'words',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/words/introduction/' },
					],
				}
			],
		}),
	],
});
