<script>
    import { stores } from '@sapper/app'
    import { fly } from 'svelte/transition'

    import Button from './Button.svelte'

    const { page } = stores()

    let nav
    let open = false

    const attemptClose = ev => nav.contains(ev.target) ? true : (open = false)

    page.subscribe(() => open = false)
</script>

<style>
    nav {
        flex: 0 0;
    }
    nav > :global(button) {
        height: 2.5rem;
        padding: .25rem;
        width: 2.5rem;
    }
    ul {
        list-style-type: none;
        position: absolute;
        right: .5rem;
        top: 3.5rem;
        width: 150px;
        z-index: 100;
    }
    li {
        margin-bottom: .5rem;
    }
</style>

<svelte:window on:click="{attemptClose}"></svelte:window>

<nav bind:this="{nav}">
    <Button aria-label="Open menu" on:click="{() => open = !open}">
        <svg viewBox="0 0 10 10" height="100%" width="100%">
			<path d="M1,2h8M1,5h8,M1,8h8" stroke-width="1" stroke-linecap="round" stroke="currentColor" />
		</svg>
    </Button>
    {#if open}
        <ul>
            <li in:fly="{{ x: 300, duration: 250, delay: 0 }}"
                out:fly="{{ x: 300, duration: 250, delay: 125 }}">
                <Button href="/" shadow secondary="{$page.path == '/'}">
                    Home
                </Button>
            </li>
            <li in:fly="{{ x: 300, duration: 250, delay: 50 }}"
                out:fly="{{ x: 300, duration: 250, delay: 75 }}">
                <Button href="/blog" shadow secondary="{$page.path.startsWith('/blog')}">
                    Articles
                </Button>
            </li>
            <li in:fly="{{ x: 300, duration: 250, delay: 100 }}"
                out:fly="{{ x: 300, duration: 250, delay: 25 }}">
                <Button href="/about" shadow secondary="{$page.path.startsWith('/about')}">
                    About
                </Button>
            </li>
            <li in:fly="{{ x: 300, duration: 250, delay: 125 }}"
                out:fly="{{ x: 300, duration: 250, delay: 0 }}">
                <Button href="/contact" shadow secondary="{$page.path.startsWith('/contact')}">
                    Contact
                </Button>
            </li>
        </ul>
    {/if}
</nav>