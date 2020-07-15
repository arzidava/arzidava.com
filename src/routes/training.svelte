<script>
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'

    background.set($colours.grey)
    pagetitle.set('training')
</script>

<svelte:head>
    <title>arzidava - training</title>
    <meta name="description" content="Handcrafted websites">
</svelte:head>

<style>
</style>

<Section>
    <p>Eplanatory text about what the training and mentoring covers.</p>
    <p>Coming soon...</p>
</Section>