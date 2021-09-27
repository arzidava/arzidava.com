<script>
	let files = [];
	$: file = files[0];
</script>

<input type="file" bind:files accept="image/*" multiple />

{#each files as file}
	<div>
		<img src={URL.createObjectURL(file)} alt="" />
	</div>
{/each}

<style>
	div {
		align-items: center;
		border: 1px solid black;
		display: flex;
		height: 300px;
		justify-content: center;
		width: 300px;
	}
	img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
