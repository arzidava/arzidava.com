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
	li {
		display: inline-block;
	}
	
	@media screen and (min-width: 400px) {
		nav {
			right: 1rem;
			width: auto;
		}
		li {
			display: block;
		}
	}
</style>

<nav class="stack">
	<li><Button href='./' secondary={segment === undefined} shadow>home</Button></li>
	<li><Button href='./blog' secondary={segment === 'blog'} shadow>blog</Button></li>
	<li><Button href='./contact' secondary={segment === 'contact'} shadow>contact</Button></li>
</nav>
