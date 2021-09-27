<script>
	import '../app.css';
	import { page } from '$app/stores';

	import { ModalV2 } from 'renderless-svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import Header from '$lib/organisms/Header.svelte';
	import Icons from '$lib/icons.svelte';
	import SocialMediaCards from '$lib/organisms/SocialMediaCards.svelte';
</script>

<ModalV2 />
<SocialMediaCards />
<Icons />

{#if $page.path !== '/'}
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
{:else}
	<main class="home">
		<slot />
	</main>
{/if}

<style>
	main {
		flex: 1 0;
		padding: 1rem;
	}
	main.home {
		background-attachment: fixed;
		background-image: url(/images/lyderhorn.webp);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
