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
				linkedin: 'https://www.linkedin.com/in/bethloke/'			},
			customCss: [
				"@fontsource/quicksand/400.css", //for fonts also please
				
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
						{ label: 'automation', link: '/projects/automation/' },
						{ label: 'music', link: '/projects/music/' }
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
