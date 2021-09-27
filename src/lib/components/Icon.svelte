<script>
	export let name;
	$: dim = name === 'logo' ? 100 : 24;
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
