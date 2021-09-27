<script>
	export let label;
	export let name;
	export let required = false;
	export let rows;
	export let value;
</script>

{#if rows}
	<label class={$$restProps.class || ''}>
		<span>{label}</span>
		<textarea {rows} {name} {required} bind:value />
	</label>
{:else}
	<label class={$$restProps.class || ''}>
		<span>{label}</span>
		<input type="text" {name} {required} bind:value />
	</label>
{/if}

<style>
	label {
		background-color: white;
		padding: 0.5rem 1rem;
	}
	span {
		display: block;
		font-weight: 600;
	}
	input,
	textarea {
		border-color: transparent transparent hsl(var(--primary)) transparent;
		border-style: solid;
		border-width: 2px;
		padding: 0.25rem;
		width: 100%;
	}
	input:focus,
	textarea:focus {
		border-color: hsl(var(--primary));
		outline: none;
	}
	textarea {
		max-width: 100%;
		resize: vertical;
	}
</style>
