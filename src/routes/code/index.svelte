<script context="module">
	export async function load({ fetch }) {
		const articles = await fetch('/code.json').then((res) => res.json());

		return {
			props: {
				articles
			}
		};
	}
</script>

<script>
	export let articles = [];

	let searchTerm = '';

	$: filteredArticles = articles.filter((art) => art.title.includes(searchTerm));
</script>

<label>
	<span>Filter by title</span>
	<input type="text" bind:value={searchTerm} placeholder="Filter by title" />
</label>

{#if filteredArticles.length}
	<ul>
		{#each filteredArticles as { href, title }}
			<li>
				<a {href} class="cnt">
					<span>{title}</span>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<figure>
		<img src="/images/hardanger.jpg" alt="Nothing found" />
		<figcaption>Your search did not return anything, time to take a break ?</figcaption>
	</figure>
{/if}

<style>
	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
	}
	li {
		display: contents;
	}
	a {
		align-items: center;
		aspect-ratio: 5 / 2;
		background-color: hsl(var(--secondary));
		display: flex;
		font-size: 1.25rem;
		font-weight: 600;
		justify-content: center;
		padding: 1rem;
		text-align: center;
	}

	label span {
		font-size: 0;
		position: absolute;
		z-index: -1;
	}

	input {
		background-color: hsl(var(--primary--200));
		border: 0;
		border-bottom: 4px solid hsl(var(--primary));
		display: block;
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 auto 1rem;
		max-width: 50ch;
		padding: 0.5rem 1rem;
		width: 100%;
	}

	input:is(:active, :focus, :hover) {
		background-color: white;
		border-color: hsl(var(--secondary));
	}

	figure {
		display: block;
		font-size: 1.125rem;
		font-weight: 600;
		margin: auto;
		max-width: 50ch;
		text-align: center;
		width: 100%;
	}

	figure img {
		border-radius: 1rem;
		box-shadow: 0px 2px 2px 2px #0007;
		display: block;
		margin-bottom: 0.5rem;
		width: 100%;
	}
</style>
