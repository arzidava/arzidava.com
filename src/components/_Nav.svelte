<script>
	import Button from './Button.svelte'
	export let segment
</script>

<style>
	nav {
		bottom: 1rem;
		font-size: 1.125rem;
		position: fixed;
		text-align: center;
		width: 100%;
	}
	nav > :global(*) {
		display: inline-block;
	}
	
	@media screen and (min-width: 400px) {
		nav {
			right: 1rem;
			width: auto;
		}
		nav > :global(*) {
			display: block;
		}
	}
</style>

<nav class="stack">
	<Button href='./' secondary={segment === undefined} shadow>home</Button>
	<Button href='./blog' secondary={segment === 'blog'} shadow>blog</Button>
	<Button href='./about' secondary={segment === 'about'} shadow>about</Button>
	<Button href='./contact' secondary={segment === 'contact'} shadow>contact</Button>
</nav>
