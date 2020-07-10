<script>
	import MultitoneImage from 'svelte-multitoneimage'
	import { background } from '../stores.js'
</script>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        position: fixed;
        width: 100vw;
    }
    .wrapper > :global(img) {        
        flex: 1 0 50%;
        object-fit: cover;
		width: 50%;
		z-index: -1;
    }
</style>

<div class="wrapper">
	{#if process.browser}
		<MultitoneImage 
			src="./lyderhorn.webp" 
			colours={['#404040',$background,'#fcfcfc']}
			amplitude="1" 
			exponent="1.1"
		/>
	{/if}
</div>

<main>
	<slot></slot>
</main>
