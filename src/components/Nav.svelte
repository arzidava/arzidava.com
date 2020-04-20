<script>
    export let segment;
</script>

<style>
    nav {
        flex-grow: 1;
        text-align: right;
    }
    a {
        background-color: var(--yellow);
        box-shadow: 2px 2px 2px var(--black);
        color: var(--black);
        display: inline-block;
        margin: .5rem;
        padding: .5rem 1rem;
        position: relative;
        text-decoration: none;
    }
    a:hover,
    a:focus {
        background-color: var(--primary);
        color: var(--white);
    }
    a[aria-current] {
        background-color: var(--primary--light);
        color: var(--white);
    }
</style>

<nav>
    <a
        aria-current='{segment === undefined ? "page" : undefined}'
        href='.'>
        <span>home</span>
    </a>
    <a
        aria-current='{segment === "blog" ? "page" : undefined}'
        href='/blog'>
        <span>blog</span>
    </a>
    <a
        aria-current='{segment === "contact" ? "page" : undefined}'
        href='/contact'>
        <span>contact</span>
    </a>
    <!-- hidden routes -->
    <a
        hidden
        aria-current='{segment === "contacted" ? "page" : undefined}'
        href='/contacted'
        style="display: none;">
    </a>
</nav>
