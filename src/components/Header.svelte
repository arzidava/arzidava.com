<script>
    import Nav from './Nav.svelte'

    export let segment
</script>

<style>
    header {
        align-items: center;
        background-color: var(--white);
        border-bottom: 3px solid var(--secondary);
        display: flex;
        flex-wrap: wrap;
        padding: .5rem 1rem;
    }

    header > a {
        color: var(--primary);
        flex-grow: 99;
        font-size: 1.5rem;
    }
</style>

<header>
    <a href="/"><h1>arzidava</h1></a>
    <Nav {segment} />
</header>
