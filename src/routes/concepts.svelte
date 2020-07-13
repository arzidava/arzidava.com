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
    .wrapper {
        margin: 0 1rem;
    }
</style>

<div class="wrapper">
    <Section>
        <p>Concepts, a colletion of experiments and samples</p>
        <p>Coming soon...</p>
    </Section>
</div>
