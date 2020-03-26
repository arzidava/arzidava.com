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
    nav.hasMarker:after {
        background-color: var(--white);
        content: '';
        display: block;
        height: 1ch;
        position: absolute;
        top: var(--markerTop);
        transform: rotate(45deg) translate(-2.5px,2.5px);
        transition: top 250ms;
        width: 1ch;
    }
    a {
        border-color: var(--white);
        border-style: solid;
        border-width: 0 0 0 2px;
        display: block;
        line-height: 1.25em;
        padding-left: 1rem;
        transition: color 250ms;
    }
    a:hover {
        background-color: var(--primary);
        color: var(--white);
    }
    a[aria-current]:not(:hover) {
        background-color: var(--white);
        color: var(--primary);
    }
    a:last-child {
        border-bottom-width: 2px;
        line-height: calc(1.25em - 1px);
    }
    a:last-child[aria-current] {
        border-bottom-color: var(--primary);
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
