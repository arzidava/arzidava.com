<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | Arzidava</title>
</svelte:head>

<h1>Projects</h1>

<ul>
	{#each data.projects as project (project.name)}
		<li>
			<a href={project.href}>
				<h2>{project.name}</h2>
				<p>{project.description}</p>
				<p>
					<span>{project.href}</span>
					<Icon name="chevron-right" />
				</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 600;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, 300px);
		margin-block-start: 1rem;
	}

	a {
		background-color: white;
		box-shadow: 0 6px 24px rgba(20, 60, 90, 0.12);
		border: 2px solid white;
		border-radius: 0.75rem 0;
		corner-shape: bevel;
		display: grid;
		gap: 0.5rem;
		inline-size: 100%;
		margin: auto;
		max-inline-size: var(--large-size);
		padding: 1rem;

		> h2 {
			font-size: 1.5rem;
			font-weight: 600;
		}

		> p {
			align-items: center;
			display: flex;
			justify-content: space-between;
			gap: 1ch;

			&:last-child {
				color: var(--secondary);
			}
		}

		&:is(:active, :focus, :hover) {
			background-color: hsl(from var(--secondary) h s calc(l * 0.05));
			color: white;

			h2 {
				color: var(--secondary);
				text-decoration: underline;
			}
		}
	}
</style>
