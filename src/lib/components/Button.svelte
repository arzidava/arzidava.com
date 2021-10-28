<script>
	export let disabled = false;
	export let href;
	export let type = 'button';
</script>

{#if href}
	<a {href}><slot /></a>
{:else}
	<button on:click {disabled} {type}><slot /></button>
{/if}

<style>
	a,
	button {
		background-color: hsl(var(--secondary));
		border: 4px solid hsl(var(--secondary));
		box-shadow: 2px 2px 2px #0007;
		padding: 0.5rem 1rem;
		transition: background-color 200ms;
	}

	a:is(:active, :focus, :hover),
	button:is(:active, :focus, :hover) {
		background-color: white;
	}
</style>
