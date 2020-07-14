<script>
    import { background, colours, pagetitle } from '../stores.js'

    import Button from '../components/Button.svelte'
    import Section from '../components/Section.svelte'

    background.set($colours.secondary)
    pagetitle.set('about')
</script>

<svelte:head>
    <title>arzidava - about</title>
    <meta name="description" content="what is for arzidava ?">
</svelte:head>

<style>
    :global(#profile) {
        display: block;
    }

    img {
        border-radius: 50%;
        float: left;
        height: 124px;
        shape-outside: circle(50%);
        margin: 0 1rem 1rem 0;
        width: 124px;
    }
</style>

<Section class="stack" id="profile">
    <img src="./stephane.jpg" alt="Picture of me">
    <h2>Hi!</h2>
    <p>I am Stéphane Vanraes, a Bergen based web developer with a passion for lightweight, accessible and minimal website.  This website is build using <a href="http://www.svelte.dev" target="_blank">Svelte</a> and <a href="http://sapper.svelte.dev" target="_blank">Sapper</a>, two technologies that are really great for achieving these goals.</p>
</Section>