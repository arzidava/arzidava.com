<script>
	import Columns from './Columns.svelte';
	export let interactive;

	let data = [15, 25, 40, 78, 100];
	let input = 0;

	const handleClick = () => {
		data.push(input);
		data = data;
		input = 0;
	};
	const handleKey = (ev) => {
		if (ev.key === 'Enter') {
			handleClick();
		}
	};
	const remove = (i) => {
		data.splice(i, 1);
		data = data;
	};
</script>

<div class="wrapper">
	<Columns {data} />
	{#if interactive}
		<div class="interaction">
			<div>
				<label>
					<span>Add a value</span>
					<input type="number" min="0" max="1000" bind:value={input} on:keyup={handleKey} />
				</label>

				<button type="button" on:click={handleClick}>Add</button>
			</div>
			<ul>
				{#each data as value, i}
					<li>
						<span>{value}</span>
						<button type="button" on:click={() => remove(i)}>X</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.wrapper > :global(*) {
		margin: 1rem;
	}
	.wrapper > :global(svg) {
		flex: 0 0 200px;
		height: 200px;
	}
	.interaction {
		display: flex;
		flex: 1 0;
		flex-direction: column;
	}
	button {
		background: transparent;
		border: none;
		color: var(--white);
	}
	input {
		color: var(--black);
		padding: 0.25rem;
		text-align: center;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(8ch, 1fr));
		list-style-type: none;
	}
	li {
		background-color: var(--white);
		color: var(--black);
		display: flex;
		flex-direction: row;
		margin: 0.25rem;
		padding: 0.25rem;
	}
	li > span {
		flex: 1 0;
	}
	li > button {
		color: red;
	}
	li > button:focus,
	li > button:hover {
		outline: none;
	}
</style>
