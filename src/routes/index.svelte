<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`../blog.json`).then(r => r.json()).then(posts => {
            return { posts: posts.slice(0, 10) }
        });
    }
</script>

<script>
    import { background, colours, pagetitle } from '..//stores.js'

    import ArticleList from '../components/ArticleList.svelte'
    import Button from '../components/Button.svelte'
    import Header from '../components/Header.svelte'
    import Section from '../components/Section.svelte'

    export let posts = []

    background.set($colours.primaryLight)
    pagetitle.set('arzidava')
</script>

<style>
    .home {
        color: white;
        text-align: center;
    }
    .home > :global(h1 + p) {
        margin-top: 0;
    }
    .home > :global(section) {
        text-align: left;
    }
    nav {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        max-width: 315px;
    }
    a {
        background-color: var(--secondary-light);
        display: inline-block;
        flex: 0 0 100%;
        font-size: 1.25rem;
		margin: 5px;
        padding: .5rem 1rem;
    }

    a:hover {
        background-color: var(--primary-light);
        box-shadow: 2px 2px black;
    }

    .flexy {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .flexy > :global(*) {
        display: flex;
        flex: 1 0 300px;
        flex-direction: column;
        margin: 0.5rem;
        text-align: left;
    }

    .flexy > :global(* > div) {
        flex: 1 0;
    }

    .flexy > :global(*.primary > a) {
        background-color: var(--secondary-light);
    }
    
    .flexy > :global(*.primary > a:active),
    .flexy > :global(*.primary > a:focus),
    .flexy > :global(*.primary > a:hover) {
        background-color: var(--primary);
    }

    @media screen and (min-width: 430px) {
        nav > a {
            flex: 1 0 calc(50% - 10px);
        }
    }
</style>

<svelte:head>
    <title>arzidava</title>
    <meta name="description" content="Personal website of Stephane Vanraes">
</svelte:head>

<div class="home stack">
    <Header>arzidava</Header>
    <p>web development</p>
    <p>lightweight &mid; accessible &mid; simple</p>
    <nav>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/concepts">concepts</a>
        <a href="/blog">articles</a>
    </nav>

    <div class="flexy">
        <Section primary>
            <h2>Web design</h2>
            <div>
                <p>Do you want a lightweight, unique website that does not look all the others ?</p>
                <p>Do you want full control over the end product ?</p>
                <p>I implement your website using state of the art technologies aimed at making a lightweight, fast and good looking website. Best of all? After completion I give you the entire code and instructions so you are not bound to me later on.</p>
            </div>
            <Button href="./contact">yes! I want a website!</Button>
        </Section>    

        <Section secondary>
            <h2>Svelte Training & Mentoring</h2>
            <div>
                <p>I have been using Svelte from the first release back in 2016 and have grown together with the framework, learning about it's strength and weaknesses. now you can also benefit of what I've learned over that time. Take contact to discuss training or mentoring with Svelte.</p>
            </div>
            <Button href="./contact">get training</Button>
        </Section>    

        <Section primary>
            <h2>Consulting</h2>
            <div>
                <p>I am currently available to work as an independent for short term, small sized projects.  Send me the details of the type of work, and how you want to work (remote, on location) and I'll contact you back.</p>
            </div>
            <Button href="./contact">let's work together</Button>
        </Section>

        <Section>
            <h2>Latest Articles</h2>
            <ArticleList {posts} />
        </Section>
    </div>
</div>