<script context="module">
	import { writable } from 'svelte/store';

	export const socialmedia = writable({});
</script>

<script>
	import { page } from '$app/stores';

	$: ({ title = 'Arzidava', image = 'arzidava.png', description = '' } = $socialmedia || {});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{$page.host}/images/{image}" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.host}{$page.path}" />
</svelte:head>
