<script>
    export let description;
    export let image = "arzidava.png"
    export let title
    export let content
    export let url
</script>

<svelte:head>
    <meta name="og:description" content="{description}">
    <meta name="og:image" content="http://www.arzidava.com/{image}">
    <meta name="og:title" content="{title}">
    <meta name="og:type" content="{content}">
    <meta name="og:url" content="http://www.arzidava.com/{url}">
</svelte:head>