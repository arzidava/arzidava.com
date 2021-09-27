import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		target: 'body'
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
