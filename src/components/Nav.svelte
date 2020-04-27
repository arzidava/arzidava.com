<script>
	export let segment;
</script>

<style>
	nav {
		bottom: 1rem;
		font-size: 1.125rem;
		position: fixed;
		text-align: center;
		width: 100%;
	}
	a {
		background-color: var(--primary);
        box-shadow: 4px 4px 4px rgba(0,0,0,.75);
        color: var(--white);
        display: inline-block;
        padding: .5rem 1rem;
	}
	a + a {
        margin-top: .5rem;
	}
	a[aria-current],
    a:focus,
    a:hover {
        background-color: var(--secondary);
	}
	@media screen and (min-width: 400px) {
		nav {
			right: 1rem;
			width: auto;
		}
		a {
			display: block;
		}
	}
</style>

<nav>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a>
	<!--<a aria-current='{segment === "about" ? "page" : undefined}' href='./about'>about</a>-->
	<a aria-current='{segment === "blog" ? "page" : undefined}' href='./blog'>blog</a>
	<a aria-current='{segment === "contact" ? "page" : undefined}' href='./contact'>contact</a>
</nav>
