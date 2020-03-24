<script>
    import { onMount } from 'svelte'
    export let segment

    let hasMarker = false;
    let selected

    $: markerTop = (selected && selected.getBoundingClientRect().top) || 0
    $: hasMarker = selected && !selected.hasAttribute('hidden')

    const handleClick = ev => selected = ev.currentTarget

    onMount(() => {
        selected = document.querySelector('[aria-current]')
        if (!selected.hasAttribute('hidden')) {
            hasMarker = true;
        }
    })
</script>

<style>
    nav {
        font-size: 1.25rem;
        position: relative;
    }
    nav.hasMarker:before,
    nav.hasMarker:after {
        background-color: var(--secondary);
        content: '';
        display: block;
        position: absolute;
        top: var(--markerTop);
        transition: top 250ms;
    }
    nav:before {
        height: 1.25em;
        left: 0;
        transform: translateY(-.4em);
        width: 2px;
    }
    nav:after {
        height: 1ch;
        left: calc(-.5ch + 1px);
        transform: translateY(-.075em) rotate(45deg);
        width: 1ch;
    }
    a {
        border-color: var(--primary);
        border-style: solid;
        border-width: 0 0 0 2px;
        display: block;
        line-height: 1.25em;
        padding-left: 1rem;
        transition: color 250ms;
    }
    a:hover {
        background-color: var(--secondary);
        border-color: var(--secondary);
        color: var(--white);
    }
    a[aria-current]:not(:hover) {
        color: var(--secondary);
    }
    a:last-child {
        border-bottom-width: 2px;
        line-height: calc(1.25em - 1px);
    }
    a:last-child[aria-current] {
        border-bottom-color: var(--secondary);
    }
</style>

<nav style="--markerTop: {markerTop}px" class:hasMarker>
    <a
        aria-current='{segment === undefined ? "page" : undefined}'
        href='.'
        on:click="{handleClick}">
        <span>home</span>
    </a>
    <a
        aria-current='{segment === "about" ? "page" : undefined}'
        href='/about'
        on:click="{handleClick}">
        <span>about</span>
    </a>
    <a
        aria-current='{segment === "blog" ? "page" : undefined}'
        href='/blog'
        on:click="{handleClick}">
        <span>blog</span>
    </a>
    <a
        aria-current='{segment === "portfolio" ? "page" : undefined}'
        href='/portfolio'
        on:click="{handleClick}">
        <span>portfolio</span>
    </a>
    <a
        aria-current='{segment === "contact" ? "page" : undefined}'
        href='/contact'
        on:click="{handleClick}">
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
