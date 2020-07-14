<script>
	import { stores } from '@sapper/app'
	import { background, pagetitle } from '../stores.js'

	import MultitoneImage from 'svelte-multitoneimage'

	import Header from '../components/Header.svelte'
	import Navigation from '../components/Navigation.svelte'

	const { page } = stores();

</script>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        position: fixed;
		width: 100vw;
		top: 0;
		left: 0;
		z-index: -1;
    }
    .wrapper > :global(img) {
        flex: 1 0 50%;
        object-fit: cover;
		width: 50%;
	}
</style>

<div class="wrapper">
	<MultitoneImage
		src="/lyderhorn.webp"
		colours={['#404040',$background,'#fcfcfc']}
		amplitude="1"
		exponent="1.1"
	/>
</div>

{#if $page.path != '/'}
	<header>
		<Header>{$pagetitle}</Header>
		<Navigation />
	</header>
{/if}

<main>
	<slot></slot>
</main>
