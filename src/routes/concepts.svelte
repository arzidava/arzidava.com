<script>
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'

    background.set($colours.grey)
    pagetitle.set('concepts')
</script>

<svelte:head>
    <title>arzidava - concepts</title>
    <meta name="description" content="Conceptual experiments">
</svelte:head>

<style>
</style>

<Section>
    <p>Concepts, a collection of experiments and samples</p>
    <p>Coming soon...</p>
</Section>