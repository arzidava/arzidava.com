import type { Post } from '$lib/types';

export function getPosts(): Post[] {
	const modules = import.meta.glob('../../routes/articles/**/+page.svx', { eager: true });

	return Object.entries(modules)
		.map(
			([path, module]) =>
				({
					...module.metadata,
					slug: path.split('/').at(-2)
				}) as Post
		)
		.filter((post) => post?.published);
	//.sort((a, b) => new Date(b.date) - new Date(a.date));
}
