<script>
    import { stores } from '@sapper/app'

    const { page } = stores()

    export let description;
    export let image = "arzidava.png"
    export let imageType = "image/png"
    export let imageWidth = "500"
    export let imageHeight = "500"
    export let title
    export let type
</script>

<svelte:head>
    {#if description}
        <meta property="og:description" content="{description}">
    {/if}
    <meta property="og:image" content="http://www.arzidava.com/{image}">
    <meta property="og:image:type" content="{imageType}" />
    <meta property="og:image:width" content="{imageWidth}" />
    <meta property="og:image:height" content="{imageHeight}" />
    <meta property="og:title" content="{title}">
    <meta property="og:type" content="{type}">
    <meta property="og:url" content="http://www.arzidava.com{$page.path}">
</svelte:head>