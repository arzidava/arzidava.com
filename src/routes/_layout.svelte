<script>
	import Nav from '../components/Navigation/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
