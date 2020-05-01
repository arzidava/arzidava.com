<script>
    export let description;
    export let image = "./arzidava.png"
    export let title
    export let content
    export let url
</script>

<svelte:head>
    <meta name="og:description" content="{description}">
    <meta name="og:image" content="{image}">
    <meta name="og:title" content="{title}">
    <meta name="og:type" content="{content}">
    <meta name="og:url" content="{url}">
</svelte:head>|