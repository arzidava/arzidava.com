<script>
    import { stores } from '@sapper/app'

    const { page } = stores()

    export let description;
    export let image = "favicon.png"
    export let title
    export let type
</script>

<svelte:head>
    {#if description}
        <meta name="og:description" content="{description}">
    {/if}
    <meta name="og:image" content="http://www.arzidava.com/{image}">
    <meta name="og:title" content="{title}">
    <meta name="og:type" content="{type}">
    <meta name="og:url" content="http://www.arzidava.com{$page.path}">
</svelte:head>