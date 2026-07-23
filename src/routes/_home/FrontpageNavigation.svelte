<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
	<nav>
		<a href={resolve('/about')}>About</a>
		<a href={resolve('/articles')}>Articles</a>
		<a href={resolve('/projects')}>Projects</a>
	</nav>
</div>

<style>
	div {
		container-type: inline-size;
	}

	nav {
		display: flex;
		font-size: 1.25rem;
		gap: 1rem;
		padding: 1rem;
		margin-inline: auto;
		max-inline-size: max-content;

		@container (inline-size < 500px) {
			display: grid;
		}
	}

	a {
		background-color: var(--secondary);
		border: 2px solid var(--secondary);
		border-radius: 0.75rem 0;
		corner-shape: bevel;
		flex: 1;
		font-weight: 500;
		letter-spacing: 1px;
		max-inline-size: 15ch;
		padding: 0.5em 2em;
		text-align: center;
		text-transform: uppercase;

		&:is(:active, :focus, :hover) {
			background-color: var(--primary);
		}
	}
</style>
