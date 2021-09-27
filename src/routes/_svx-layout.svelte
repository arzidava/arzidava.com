<script>
	import { page } from '$app/stores';

	import { socialmedia } from '$lib/organisms/SocialMediaCards.svelte';

	export let date;
	export let summary;
	export let title;

	$: socialmedia.set({
		title: `Arzidava | ${title}`,
		description: summary
	});
</script>

<svelte:head />

<h1>{title}</h1>

<article>
	{#if $page.path.startsWith('/blog')}
		<p class="date">Published on: {date}</p>
	{/if}
	<slot />
</article>

<style>
	h1 {
		margin-bottom: 1rem;
		text-align: center;
	}
	p {
		text-align: end;
	}
	article {
		background-color: white;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		margin: auto;
		max-width: 96ch;
		width: 100%;
	}
</style>
