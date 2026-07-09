<script lang="ts">
	import '$lib/styling/index.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/state';
	import Icons from '$lib/components/Icons.svelte';
	import startViewTransition from '$lib/utils/startViewTransition';

	let { children } = $props();

	$effect(() => {
		document.body.classList.toggle('is-home', page.url.pathname === '/');
	});

	startViewTransition();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if page.url.pathname !== '/'}
	<Header />
{/if}

<main>
	{@render children()}
</main>

<Footer />
<Icons />

<style>
	main {
	}
</style>
