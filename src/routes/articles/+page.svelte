<script lang="ts">
	import { resolve } from '$app/paths';
	import Date from '$lib/components/Date.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Articles | Arzidava</title>
</svelte:head>

<h1>Articles</h1>

<ul>
	{#each data.posts as post (post.title)}
		<li>
			<a href={resolve('/articles/[slug]', { slug: post.slug })}>
				<div class="tags">
					{#each post.tags as tag (tag)}
						<span>{tag}</span>
					{/each}
				</div>
				<h2>{post.title}</h2>
				<p>{post.description}</p>
				<div class="date">
					<Date date={post.date} />
					<Icon name="chevron-right" />
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 600;
	}

	ul,
	li + li {
		margin-block-start: 1rem;
	}

	a {
		background-color: white;
		box-shadow: 0 4px 16px rgba(20, 60, 90, 0.15);
		border: 2px solid white;
		border-radius: 0.75rem 0;
		corner-shape: bevel;
		display: grid;
		gap: 0.5rem;
		inline-size: 100%;
		margin: auto;
		max-inline-size: var(--large-size);
		padding: 1rem;
		position: relative;

		&::after {
			background-color: var(--secondary);
			border-radius: 50%;
			content: '';
			display: block;
			height: 10px;
			position: absolute;
			inset-block-end: 2px;
			inset-inline-start: 2px;
			transition: inset-block-end linear 500ms;
			width: 10px;
		}

		h2 {
			font-size: 1.5rem;
			font-weight: 600;
			text-decoration: underline;
			text-decoration-color: transparent;
		}

		.tags {
			color: var(--secondary);
			display: flex;
			flex-wrap: wrap;
			font-size: 0.75em;
			font-weight: 600;
			gap: 1ch;
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

		.date {
			display: flex;
			justify-content: space-between;
			gap: 1ch;

			> :global(*:last-child) {
				color: var(--secondary);
			}
		}
		&:is(:active, :focus, :hover) {
			background-color: hsl(from var(--secondary) h s calc(l * 0.05));

			&:after {
				inset-block-end: calc(100% - 1.75rem);
			}

			h2 {
				color: var(--secondary);
				text-decoration-color: currentColor;
			}

			p {
				color: white;
			}

			:global(time) {
				color: white;
			}
		}
	}
</style>
