<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import type { Post } from '$lib/types';

	type Props = {
		posts: Post[];
	};

	const { posts }: Props = $props();
</script>

{#snippet PostItem(post: Post)}
	<li>
		<a href={resolve('/blog/[slug]', { slug: post.slug })}>
			<h3>{post.title}</h3>
			<div>
				<Icon name="chevron-right" />
			</div>
			<time datetime={post.date}>
				{new Date(post.date).toLocaleDateString('en-GB', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</a>
	</li>
{/snippet}

<div>
	<h2>Recent Articles</h2>
	<ul>
		{#each posts as post (post.slug)}
			{@render PostItem(post)}
		{/each}
	</ul>

	<a href={resolve('/blog')}>
		<span>See all articles</span>
		<Icon name="chevron-right" />
	</a>
</div>

<style>
	div {
		background-color: var(--secondary);
		display: grid;
		gap: 1rem;
		margin: 1rem auto;
		max-inline-size: var(--main-size);
		padding: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	ul {
		display: grid;
		gap: 0.5rem;
	}

	div > a {
		align-items: center;
		display: flex;
		font-weight: 600;
		gap: 1ch;
		margin-inline-start: auto;

		&:is(:active, :focus, :hover) {
			color: white;
			text-decoration: underline;
		}
	}

	li > a {
		align-items: center;
		background-color: white;
		border: 2px solid white;
		display: grid;
		grid-template-columns: 1fr 2rem;
		padding: 0.25rem 1rem;

		> h3 {
			font-size: 1.25rem;
			font-weight: 600;
		}

		> div {
			background-color: transparent;
			font-size: 2rem;
			grid-column: 2 / 3;
			grid-row: 1 / 3;
			padding: 0;
			margin: 0;
		}

		&:is(:active, :focus, :hover) {
			background-color: var(--secondary);
			color: white;
		}
	}
</style>
