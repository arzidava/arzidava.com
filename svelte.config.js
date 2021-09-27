import adapter from '@sveltejs/adapter-static'
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
        adapter: adapter({
            prerender: true
        }),
		target: 'body'
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
