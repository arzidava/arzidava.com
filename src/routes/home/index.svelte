<script>
    import { onMount } from 'svelte'
    import { background, colours } from '../../stores.js'

    import Articles from './Articles.svelte'
    import Header from '../../components/Header.svelte'

    export let posts = []

    onMount(() => background.set($colours.primaryLight))

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

    @media screen and (min-width: 430px) {
        nav > a {
            flex: 1 0 calc(50% - 10px);
        }
    }
</style>

<div class="home stack">
    <Header>arzidava</Header>
    <p>web development</p>
    <p>lightweight &mid; accessible &mid; simple</p>
    <nav>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/concepts">concepts</a>
        <a href="/blog">blog</a>
    </nav>
    <Articles { posts }/>   
</div>