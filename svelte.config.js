import { fileURLToPath } from 'node:url';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		//runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				articles: `${dirname}src/lib/renderers/Layout.svelte`,
				about: `${dirname}src/lib/renderers/About.svelte`
			}
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
