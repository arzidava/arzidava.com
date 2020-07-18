<script>
    import { stores } from '@sapper/app'
    
    let open = false

    const { page } = stores()    
    page.subscribe(_ => open = false)

</script>

<style>
    nav {
        flex: 1 0;
    }
    nav > div {
        display: flex;
        flex-direction: row;
    }

    a,
    button {
        background-color: #ff8f1f;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
        flex: 1 0;
        text-align: center;
        margin: 0 0.25rem;
    }

    a {
        padding: 0.5rem 1rem;
    }
    a[active] {
        background-color: #bd6004;
        color: white;
    }

    button:active,
    button:hover,
    button:focus,
    a:active,
    a:focus,
    a:hover:not([active]) {
        background-color: #0491BD;
        outline: none;
    }

    button {
        border: none;
        display: none;
        height: 2.5rem;
        position: absolute;
        right: 1rem;
        stroke: currentColor;
        top: 1rem;
        width: 2.5rem;
    }

    @media screen and (max-width: 482px) {
    a {
        display: block;
        margin: .5rem .25rem;
    }
    button {
        display: block;
        padding: .25rem;
    }
    nav > div  {
        display: block;
        position: absolute;
        right: calc(-15ch);
        top: 3.5rem;   
        transition: right ease-in 200ms;
        width: 15ch;
        z-index: 100;
    }
    nav.open > div {
        right: 1rem;
    }
    }
</style>
<nav class:open>
  <button type="button" on:click="{_ => open = !open}" aria-label={open ? "close navigation" : "open navigation"}>
		<svg viewBox="0 0 10 10" height="100%" width="100%">
			<path d="M1,2h8M1,5h8,M1,8h8" stroke-width="1" stroke-linecap="round" stroke="white" />
		</svg>
  </button>
  <div>
    <a href="/">Home</a>
    <a href="/blog" active="{$page.path.startsWith('/blog')}">Articles</a>
    <a href="/training" active="{$page.path.startsWith('/training')}">Training</a>
    <a href="/about" active="{$page.path.startsWith('/about')}">About</a>
    <a href="/contact" active="{$page.path.startsWith('/about')}">Contact</a>
  <div>
</nav>
