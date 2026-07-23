<script lang="ts">
	import { resolve } from '$app/paths';
	import Date from '$lib/components/Date.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Post } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = Post & {
		children: Snippet;
	};

	const { title, date, tags, children }: Props = $props();
</script>

<div class="back-link">
	<a href={resolve('/articles')}>
		<Icon name="chevron-left" />
		<span>See all articles</span>
	</a>
</div>

<article>
	<div class="tags">
		{#each tags as tag (tag)}
			<span>{tag}</span>
		{/each}
	</div>
	<Date {date} />
	<h1>{title}</h1>
	{@render children?.()}
</article>

<style>
	a {
		align-items: center;
		display: flex;
		font-weight: 600;
		gap: 1ch;
		inline-size: max-content;
		padding: 0.25rem 1rem;

		&:is(:active, :focus, :hover) {
			background-color: white;
		}
	}

	.tags {
		color: var(--secondary);
		display: flex;
		flex-wrap: wrap;
		font-size: 0.75em;
		font-weight: 600;
		gap: 1ch;
		inline-size: 100%;
		letter-spacing: 1px;
		text-transform: uppercase;

		> span + span::before {
			background-color: currentColor;
			content: '';
			display: inline-block;
			height: 4px;
			margin-inline-end: 1ch;
			vertical-align: middle;
			width: 4px;
		}
	}

	.back-link {
		margin: 1rem auto;
		max-inline-size: var(--large-size);
	}

	article {
		background-color: white;
		box-shadow: 0 6px 24px rgba(20, 60, 90, 0.12);
		display: grid;
		gap: 1rem;
		inline-size: 100%;
		margin: auto;
		max-inline-size: var(--large-size);
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
