<script>    
    import { onMount } from 'svelte'
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'
    
    onMount(() => {
        background.set($colours.grey)
        pagetitle.set('about')
    });
</script>

<svelte:head>
    <title>arzidava - about</title>
    <meta name="description" content="what is for arzidava ?">
</svelte:head>

<style>
</style>

<Section>
    Coming soon...
</Section>