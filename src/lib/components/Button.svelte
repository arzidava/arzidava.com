<script>
	export let disabled = false;
	export let type = 'button';
</script>

<button on:click {disabled} {type}><slot /></button>

<style>
	button {
		background-color: hsl(var(--secondary));
		border: 4px solid hsl(var(--secondary));
		box-shadow: 2px 2px 2px #0007;
		padding: 0.5rem 1rem;
		transition: background-color 200ms;
	}

	button:is(:active, :focus, :hover) {
		background-color: white;
	}
</style>
