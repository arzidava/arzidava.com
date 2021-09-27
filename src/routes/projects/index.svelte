<script context="module">
	export async function load({ fetch }) {
		const projects = await fetch('/projects.json').then((res) => res.json());

		return {
			props: {
				projects
			}
		};
	}
</script>

<script>
	export let projects = [];
</script>

<ul>
	{#each projects as { href, title }}
		<li>
			<a {href} class="cnt">
				<span>{title}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
	li {
		display: contents;
	}
	a {
		align-items: center;
		aspect-ratio: 5 / 1;
		background-color: hsl(var(--secondary));
		display: flex;
		font-size: 1.25rem;
		font-weight: 600;
		justify-content: center;
		padding: 1rem;
		text-align: center;
	}

	li:nth-child(2n + 1) a {
		grid-column: 1 / 3;
	}
	li:nth-child(2n) a {
		grid-column: 2 / 4;
	}
</style>
