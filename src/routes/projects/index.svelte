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
		display: flex;
		justify-content: center;
	}
	a {
		align-items: center;
		background-color: hsl(var(--secondary));
		display: flex;
		font-size: 1.25rem;
		font-weight: 600;
		justify-content: center;
		max-width: 400px;
		padding: 4rem 1rem;
		text-align: center;
		width: 100%;
	}

	li:nth-child(2n + 1) {
		grid-column: 1 / 3;
	}
	li:nth-child(2n) {
		grid-column: 2 / 4;
	}
</style>
