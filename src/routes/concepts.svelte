<script>    
    import { onMount } from 'svelte'
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'
    
    onMount(() => {
        background.set($colours.grey)
        pagetitle.set('concepts')
    });
</script>

<svelte:head>
    <title>arzidava - concepts</title>
    <meta name="description" content="Conceptual experiments">
</svelte:head>

<style>
</style>

<Section>
    Coming soon...
</Section>