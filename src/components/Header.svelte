<script>
    import Nav from './Nav.svelte'

    export let segment
</script>

<style>
    header {
        align-items: center;
        background-color: var(--primary);
        color: var(--white);
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
    <Nav {segment} />
</header>
