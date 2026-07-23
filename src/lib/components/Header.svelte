<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
</script>

<header>
	<a href={resolve('/')} class="home">
		<Icon name="logo" />
		<span>arzidava</span>
	</a>
	<nav>
		<a href={resolve('/')}>Home</a>
		<a
			href={resolve('/articles')}
			aria-current={page.route.id?.startsWith(resolve('/articles')) ? 'page' : undefined}
		>
			Articles
		</a>
		<a
			href={resolve('/projects')}
			aria-current={page.route.id?.startsWith(resolve('/projects')) ? 'page' : undefined}
		>
			Projects
		</a>
		<a
			href={resolve('/about')}
			aria-current={page.route.id?.startsWith(resolve('/about')) ? 'page' : undefined}
		>
			About
		</a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
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
		gap: 2ch;
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
