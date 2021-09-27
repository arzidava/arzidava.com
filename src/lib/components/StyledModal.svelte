<script>
	import { closeModalV2 } from 'renderless-svelte';
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	onMount(() => {
		document.body.classList.add('noscroll');
		return () => document.body.classList.remove('noscroll');
	});
</script>

<div class="backdrop">
	<div class="modal">
		<button on:click={closeModalV2}>
			<Icon name="close" />
			<span>Close modal</span>
		</button>
		<slot />
	</div>
</div>

<style>
	.backdrop {
		align-items: center;
		background-color: #0007;
		display: flex;
		justify-content: center;
		position: fixed;
		inset: 0;
		isolation: isolate;
		z-index: 100;
	}
	.modal {
		background-color: white;
		box-shadow: 4px 4px 4px #0007;
		max-height: 90%;
		max-width: 90%;
		overflow-x: auto;
		padding: 2rem 1rem 1rem;
		position: relative;
	}

	button {
		background-color: transparent;
		border: 0;
		position: absolute;
		inset-inline-end: 0.25rem;
		inset-block-start: 0.5rem;
	}
	button > span {
		font-size: 0;
		position: relative;
		z-index: -1;
	}
</style>
