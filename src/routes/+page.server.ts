import { getPosts } from '$lib/utils/posts.js';

export function load() {
	return { posts: getPosts() };
}
