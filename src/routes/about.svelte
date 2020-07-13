<script>    
    import { onMount } from 'svelte'
    import { background, colours, pagetitle } from '../stores.js'

    import Button from '../components/Button.svelte'
    import Section from '../components/Section.svelte'
    
    onMount(() => {
        background.set($colours.secondary)
        pagetitle.set('about')
    });
</script>

<svelte:head>
    <title>arzidava - about</title>
    <meta name="description" content="what is for arzidava ?">
</svelte:head>

<style>
    .wrapper {
        margin: 0 1rem;
    }
    :global(.profile) {
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding-bottom: 0 !important;
    }
    :global(.profile > img) {
        border: 2px solid var(--white);
        border-radius: 50%;
        flex: 0 0 80px;
        height: 124px;
        margin-bottom: 1rem;
        margin-right: 1rem;
        width: 124px;
    }
    :global(.profile > div) {
        flex: 1 0 300px;
        margin-bottom: 1rem;
        margin-top: 0 !important;
    }
</style>

<div class="stack wrapper">
    <Section class="profile">
        <img src="./stephane.jpg" alt="Picture of me">
        <div>
            <h2>Hi!</h2>
            <p>I am Stéphane Vanraes, a Bergen based web developer with a passion for lightweight, accessible and minimal website.  This website is build using <a href="http://www.svelte.dev" target="_blank">Svelte</a> and <a href="http://sapper.svelte.dev" target="_blank">Sapper</a>, two technologies that are really great for achieving these goals.</p>
        </div>
    </Section>

    <Section>
        <h2>Handcrafted websites</h2>
        <p>Making websites is becoming easier everyday, you can go for the drag-and-drop experience some services offer, or you can code your own website and use popular library like Bootstrap to quickly style it and get something up and running.  The problem with these is that your website quickly starts looking like all the others. (Big image on top, couple of blocks under it, footer with some contact information, ...) To truly get a unique feel you have to go further and get dirty in code.</p>
        <br />
        <p>The look and feel of all my work is carefully written by hand, making each design truly unique and engaging. Using the latest in the field the websites I make are also lightweight and fast, because every second a visitor has to wait for your site to load is a loss. On top of that, once the work is finished I hand over all code and instructions so you as a client have absolute full control.</p>
        <br />
        <p>Interested in working with me ? <a href="./contact">Take contact!</a></p>
    </Section>

    <Section>
        <h2>Svelte Training and Consulting</h2>
        <p>Are you interested in using Svelte or Sapper for a project, but don't know where to start ?</p>
        <p>Or need an extra hand helping you out to start out your business, concept or simply curious about the technology in general ?</p>
        <p>I do consulting, workshops and more related to Svelte and Sapper</p>
        <p><a href="./contact">Contact</a> me to see if I can help you.</p>
    </Section>
</div>