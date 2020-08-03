<script>
	import { stores } from '@sapper/app'

	import { pagetitle } from '../store.js'

	import Backdrop from '../components/Backdrop.svelte'
	import Header from '../components/Header.svelte'

	const { page } = stores()
</script>

<style>
	main {
		margin: auto;
		max-width: 1044px;
		padding: 1rem;
	}
</style>

<svelte:head>
	<title>arzidava {$pagetitle ? `- ${$pagetitle}` : ''}</title>
</svelte:head>

<Backdrop />

{#if $page.path != '/'}
	<Header />
{/if}

<main>
	<slot></slot>
</main>
