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
    header > h1 {
        flex-grow: 1;
        font-size: 2.5rem;
    }
</style>

<header>
    <h1>arzidava</h1>
    <Nav {segment}/>
</header>

<main>
    <slot></slot>
</main>

<Footer {segment} />
