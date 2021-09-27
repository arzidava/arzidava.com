<script>
	export let data = [];
	$: xwidth = data.length ? 100 / data.length : 100;
	$: yratio = data.length ? 100 / Math.max(...data) : 100;
</script>

<svg viewBox="0 0 100 100">
	{#each data as value, i}
		<rect y={100 - value * yratio} width={xwidth} x={i * xwidth} height={value * yratio} />
	{:else}
		<text x="50" y="50">No data provided</text>
	{/each}
</svg>

<style>
	rect {
		fill: hsl(var(--primary) / 0.5);
		stroke: hsl(var(--primary));
	}
	text {
		fill: var(--white);
		font-size: 10px;
		text-anchor: middle;
	}
</style>
