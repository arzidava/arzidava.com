<script>
    import { stores } from '@sapper/app'
    import { fade } from 'svelte/transition'

    import { background, colours } from '../stores.js'

    import Button from './Button.svelte'

    const { page } = stores()
    let open = false

    $: secondary = $background == $colours.secondary
    
    page.subscribe(_ => open = false)
</script>

<style>
    nav {
        flex-grow: 1;
        height: 40px;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style-type: none;
        justify-content: flex-end;
        text-align: right;
    }

    ul > li + li {
        margin-left: .5rem;
    }

    nav > :global(button) {  
        display: none;      
		height: 3rem;
		padding: .25rem;
		position: fixed;
		right: 1rem;
		stroke: var(--white);
		top: 1rem;
		width: 3rem;
		z-index: 5;
    }

    @media screen and (max-width: 580px) {
        nav > :global(button) {
            display: block;
        }

        ul {
            transition: right 500ms linear;
            display: block;
            position: fixed;
            right: -7rem;
            top: 4.25rem;
            z-index: 100;
        }

        ul.open {
            right: 1rem;
        }

        ul > :global(a),
        ul > :global(a + a) {
            margin: 0;
        }
    }
</style>

<nav>
	<Button on:click="{_ => open = !open}" shadow aria-label={open ? "close navigation" : "open navigation"}>
		<svg viewBox="0 0 10 10" height="100%" width="100%">
			<path d="M1,2h8M1,5h8,M1,8h8"  stroke-width="1" stroke-linecap="round"/>
		</svg>
	</Button>
    <ul class:open>
        <li><Button href="/" {secondary} shadow>home</Button></li>
        <li><Button href="/about" secondary={$page.path == '/about' != secondary} shadow>about</Button></li>
        <li><Button href="/blog" secondary={$page.path.startsWith('/blog') || secondary} shadow>articles</Button></li>
        <li><Button href="/concepts" secondary={$page.path == '/concepts' || secondary} shadow>concepts</Button></li>
        <li><Button href="/contact" secondary={$page.path == '/contact' != secondary} shadow>contact</Button></li>
    <ul>
</nav>
