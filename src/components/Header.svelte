<script>
    import { slide } from 'svelte/transition'
    import Logo from './Logo.svelte'
    import Navigation from './Navigation.svelte'

    import { pagetitle } from '../store.js'
</script>

<style>
    header {
        align-items: center;
        background-color: var(--secondary-light);
        box-shadow: 0 4px 4px rgba(0, 0, 0, .75);
        color: var(--black);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 3rem;
        padding: .25rem .5rem;
    }

    header > :global(svg) {
        height: 2rem;
        margin-right: 1ch;
    }

    h1 {
        flex: 1 0;
    }
</style>

<header transition:slide>
    <Logo />
    <h1>{$pagetitle}</h1>
    <Navigation />
</header>