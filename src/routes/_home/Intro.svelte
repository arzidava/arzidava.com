<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<section>
	<Icon name="logo" />
	<h1 class="title">arzidava</h1>
</section>

<style>
	section {
		background-color: hsl(var(--primary) / 0.2);
		backdrop-filter: blur(1rem);
		display: grid;
		font-size: 1.5rem;
		justify-items: center;
		padding: 1rem;

		> :global(svg) {
			font-size: 16rem;
			translate: 0 3rem;
		}

		h1 {
			font-size: 4rem;
			font-weight: 600;
		}
	}
</style>
