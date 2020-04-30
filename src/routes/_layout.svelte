<script>
	import Nav from '../components/Navigation/Nav.svelte';
	import '../utils/worklets/bubbles.js'
	
	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
