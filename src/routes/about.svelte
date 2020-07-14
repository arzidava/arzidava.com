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
</div>