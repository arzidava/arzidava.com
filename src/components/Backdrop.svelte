<script>
    import MultitoneImage from 'svelte-multitoneimage'
    import { backdropColour } from '../store.js'
</script>

<style>
    .backdrop {
        display: flex;
        height: 100vh;
        position: fixed;
		width: 100vw;
		z-index: -1;
    }
    .backdrop > :global(img) {
        object-fit: cover;
	}
</style>

<div class="backdrop" aria-hidden="true">
	<MultitoneImage
        alt=""
        src="lyderhorn.jpg"
        colours="{['#040404', $backdropColour, '#fcfcfc']}"
		amplitude="1"
		exponent="1.1"
    />
</div>