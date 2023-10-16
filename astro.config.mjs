import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import '@fontsource-variable/quicksand';


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
				'./src/fonts/font-face.css'
			],
			sidebar: [
				{
					label: 'main',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/main/introduction/' },
						{ label: 'gallery', link: '/main/gallery/' },
						{ label: 'contact', link: '/main/contact/' },
					],
				},
				{
					label: 'professional',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'skills', link: '/professional/skills/' },
						{ label: 'education', link: '/professional/education/' },
						{ label: 'work', link: '/professional/work/' },
					],
				},
				{
					label: 'projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/projects/introduction/' },
						{ label: 'automation', link: '/projects/automation/' },
						{ label: 'music', link: '/projects/music/' },
						{ label: 'visual art', link: '/projects/visual-art/' }
					], 
				},
				{
					label: 'words',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/words/introduction/' },
						{ label: 'short essays', link: '/words/short-essays/' },
					],
				}
			],
		}),
	],
});
