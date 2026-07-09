<script lang="ts">
	import type { IconTypes } from './Icons.svelte';

	let { name }: { name: IconTypes } = $props();

	const dim = $derived(name === 'logo' ? 100 : 24);
</script>

<svg viewBox="0 0 {dim} {dim}">
	<use xlink:href="#svg-{name}" />
</svg>

<style>
	svg {
		height: 1em;
		width: 1em;
	}
</style>
