<script>
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
</script>

<header>
	<a href="/" class="logo">
		<Icon name="logo" />
		<span>arzidava</span>
	</a>
	<nav>
		<a href="/" aria-current={$page.path == '/'}>Home</a>
		<a href="/blog" aria-current={$page.path.startsWith('/blog')}>Blog</a>
		<a href="/code" aria-current={$page.path.startsWith('/code')}>Code</a>
		<a href="/projects" aria-current={$page.path.startsWith('/projects')}>Projects</a>
		<a href="/about" aria-current={$page.path == '/about'}>About</a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		background-color: hsl(var(--secondary));
		box-shadow: 0 4px 4px #0007;
		display: flex;
		flex: 0 0;
		flex-wrap: wrap;
		gap: 0.5ch;
		padding: 1rem;
	}
	.logo {
		all: unset;
		align-items: center;
		display: flex;
		font-size: 2rem;
		font-weight: 600;
		gap: 0.5ch;
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		font-size: 1.125rem;
		font-weight: 600;
		gap: 0.75ch;
		margin-inline-start: auto;
	}

	nav > a {
		border-bottom: 4px solid hsl(var(--primary));
		padding: 0.125rem 0.5ch;
	}

	a[aria-current~='true'] {
		background-color: hsl(var(--primary--200));
	}
</style>
