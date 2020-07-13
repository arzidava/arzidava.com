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
    
    a {
        color: var(--secondary-light);
        display: inline-block;
        margin: 0 -.5ch;
        padding: 0 .5ch;
        text-decoration: underline;
    }

    a:hover,
    a:focus {
        background-color: var(--secondary);
        color: var(--white);
        outline: none;
        text-decoration: none;
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
        flex: 1 1 300px;
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
        <h2>"Handcrafted" websites</h2>
        <p>Nowadays there are plenty of services allowing you to drag-and-drop elements to create your personal website.  But somehow this has resulted in most websites looking very generic, being very slow to load and generally 'more of the same'.  While this works very well to quickly create a presence on the internet, it does not help you to make website really standout.</p>
        <p>All of my designs are carefully implemented by hand, making each site unique.  As an extra I ensure your website is very light, loads fast and works on a wide series of screen sizes and devices.</p>
        <p>And when the project is finished you will have access to all the code and instructions, no need to remain dependent on me, you will truly <strong>own</strong> your own website.</p>
        <p>Interested in seeing what I can do ? <a href="./contact">Contact me</a></p>
    </Section>

    <Section>
        <h2>Svelte Training and Consulting</h2>
        <p>Are you interested in using Svelte or Sapper for a project, but don't know where to start ?</p>
        <p>Or need an extra hand helping you out to start out your business, concept or simply curious about the technology in general ?</p>
        <p>I do consulting, workshops and more related to Svelte and Sapper</p>
        <p><a href="./contact">Contact</a> me to see if I can help you.</p>
    </Section>
</div>