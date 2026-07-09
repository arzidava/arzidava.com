<script>
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
</script>

<header>
	<a href="/" class="home">
		<Icon name="logo" />
		<span>arzidava</span>
	</a>
	<nav>
		<a href="/">Home</a>
		<a href="/blog" aria-current={page.route.id?.startsWith('/blog') ? 'page' : undefined}>
			Blog
		</a>
		<a href="/about" aria-current={page.route.id?.startsWith('/about') ? 'page' : undefined}>
			About
		</a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		display: flex;
		gap: 2ch;
		inline-size: min(100%, var(--main-size));
		margin-inline: auto;
		padding: 1rem;
	}

	.home {
		align-items: center;
		display: flex;
		font-size: 2rem;
		gap: 0.5ch;
	}
	nav {
		align-self: flex-end;
		display: flex;
		gap: 1ch;
		margin-inline-start: auto;

		> a {
			font-size: 1.25rem;
			font-weight: 600;
			position: relative;
			text-transform: uppercase;

			&[aria-current~='page'] {
				&::after {
					background-color: var(--secondary);
					block-size: 4px;
					border-radius: 1px;
					content: '';
					inline-size: 100%;
					inset-block-end: -8px;
					inset-inline-end: 0;
					position: absolute;
					view-transition-name: navbar-underline;
				}
			}
		}
	}
</style>
