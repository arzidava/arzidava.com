import { browser } from '$app/env';

export const startCssWorklets = () => {
	if (browser) {
		if (CSS && 'paintWorklet' in CSS) {
			const url = new URL('./css-worklets.js', import.meta.url);
			CSS.paintWorklet.addModule(url);
		}
	}
};
