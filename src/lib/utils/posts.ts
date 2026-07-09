export function getPosts() {
	const modules = import.meta.glob('../../routes/blog/**/+page.svx', { eager: true });

	return Object.entries(modules)
		.map(([path, module]) => ({
			...module.metadata,
			slug: path.split('/').at(-2)
		}))
		.filter((post) => post?.published)
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}
