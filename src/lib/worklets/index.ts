export const startCssWorklets = () => {
	if ('paintWorklet' in CSS) {
		const url = new URL('./css-worklets.js', import.meta.url);
		CSS.paintWorklet.addModule(url);
	}
};
