<script>
    import Footer from '../components/Footer.svelte'
    import Nav from '../components/Nav.svelte'

    export let segment
</script>

<style>
    header {
        align-items: center;
        color: var(--primary);
        display: flex;
        padding: .5rem 1rem;
    }
    header > a {
        flex-grow: 1;
        font-size: 1.5rem;
    }
</style>

<header>
    <a href="/"><h1>arzidava</h1></a>
    <Nav {segment}/>
</header>

<main>
    <slot></slot>
</main>

<Footer {segment} />
