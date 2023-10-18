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
						{ label: 'faq', link: '/main/faq/' },
						{ label: 'contact', link: '/main/contact/' },
					],
				},
				{
					label: 'showcase',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/showcase/introduction/' },
						{ label: 'automation', link: '/showcase/automation/' },
						{ label: 'music', link: '/showcase/music/' },
						{ label: 'visual art', link: '/showcase/visual-art/' }
					], 
				},
				{
					label: 'projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/projects/introduction/' }
					], 
				},
				{
					label: 'activities',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'climbing', link: '/activities/climbing/' },
						{ label: 'skating', link: '/activities/skating/' },
						{ label: 'cycling', link: '/activities/cycling/' },
						{ label: 'rhythmic gymnastics', link: '/activities/rhythmicgymnastics/' },
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
				}
			],
		}),
	],
});
