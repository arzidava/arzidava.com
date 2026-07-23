<script lang="ts">
	import type { Post } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = Post & {
		children: Snippet;
	};

	const { title, children }: Props = $props();
</script>

<svelte:head>
	<title>About | Arzidava</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	{@render children?.()}
</article>

<style>
	article {
		background-color: white;
		box-shadow: 0 6px 24px rgba(20, 60, 90, 0.12);
		display: grid;
		gap: 1rem;
		inline-size: 100%;
		margin: 2rem auto;
		max-inline-size: var(--large-size);
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
