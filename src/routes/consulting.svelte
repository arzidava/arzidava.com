<script>
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'

    background.set($colours.grey)
    pagetitle.set('consulting')
</script>

<svelte:head>
    <title>arzidava - consulting</title>
    <meta name="description" content="Svelte Consultin">
</svelte:head>

<style>
</style>

<Section>
    <p>Eplanatory text about what this is about.</p>
    <p>Coming soon...</p>
</Section>