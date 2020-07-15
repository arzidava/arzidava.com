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
    import Flexer from '../components/Flexer.svelte'
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

    nav {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        max-width: 315px;
    }

    nav > :global(a) {
        flex: 0 0 100%;
        margin: 5px;
    }

    .info {
        flex: 1 0;
    }
    
    @media screen and (min-width: 430px) {
        nav > :global(a) {
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
        <Button href="/about" shadow secondary>about</Button>
        <Button href="/contact" shadow secondary>contact</Button>
        <Button href="/concepts" shadow secondary>concepts</Button>
        <Button href="/blog" shadow secondary>articles</Button>
    </nav>

    <Flexer margin="0.5rem" size="300px">
        <Section primary>
            <h2>Web design</h2>
            <div class="info">
                <p>Do you want a lightweight, unique website that does not look all the others ?</p>
                <p>Do you want full control over the end product ?</p>
                <p>I implement your website using state of the art technologies aimed at making a lightweight, fast and good looking website. Best of all? After completion I give you the entire code and instructions so you are not bound to me later on.</p>
            </div>
            <Button href="./webdesign">yes! I want a website!</Button>
        </Section>    

        <Section secondary>
            <h2>Svelte Training & Mentoring</h2>
            <div class="info">
                <p>I have been using Svelte from the first release back in 2016 and have grown together with the framework, learning about it's strength and weaknesses. now you can also benefit of what I've learned over that time. Take contact to discuss training or mentoring with Svelte.</p>
            </div>
            <Button href="./training" secondary>get training</Button>
        </Section>    

        <Section primary>
            <h2>Consulting</h2>
            <div class="info">
                <p>I am currently available to work as an independent for short term, small sized projects.  Send me the details of the type of work, and how you want to work (remote, on location) and I'll contact you back.</p>
            </div>
            <Button href="./consulting">let's work together</Button>
        </Section>

        <Section>
            <h2>Latest Articles</h2>
            <ArticleList {posts} />
        </Section>
    </Flexer>
</div>