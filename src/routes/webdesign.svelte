<script>
    import { background, colours, pagetitle } from '../stores.js'
    import Section from '../components/Section.svelte'

    background.set($colours.grey)
    pagetitle.set('web design')
</script>

<svelte:head>
    <title>arzidava - webdesign</title>
    <meta name="description" content="Svelte Training for Individuals and Companies">
</svelte:head>

<style>
</style>

<Section>
    <p>Eplanatory text about my services in webdesign.</p>
    <p>Coming soon...</p>
    <p>Some subjects: CMS, Lighthouse, Responsive</p>
</Section>