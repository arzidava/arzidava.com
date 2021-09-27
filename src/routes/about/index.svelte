<script>
	import { openModalV2 } from 'renderless-svelte';
	import ContactForm from '$lib/organisms/ContactForm.svelte';
	import Button from '$lib/components/Button.svelte';

	async function contact() {
		const res = await openModalV2(ContactForm);
	}
</script>

<div class="wrapper">
	<h1>Stephane Vanraes</h1>

	<div class="img">
		<img src="/images/stephane.jpg" alt="Stephane Vanraes" />
	</div>
	<div class="text">
		<p>
			I am Stephane Vanraes, a frontend developer based in Bergen, Norway. As a JavaScript and CSS
			enthusiast you will often find me trying out new things or helping others out with their
			problems, and you will find me active doing just that in several OS communities.
		</p>

		<p>
			When I am not coding away at my computer you will find me hiking in the mountains around town
			or playing boardgames.
		</p>

		<Button on:click={contact}>Contact me</Button>
	</div>
</div>

<style>
	.wrapper {
		align-items: flex-end;
		display: flex;
		flex-wrap: wrap;
		font-size: 1.25rem;
		gap: 1rem;
		justify-content: center;
		margin: auto;
		max-width: 96ch;
	}
	h1 {
		flex: 1 0 100%;
		text-align: center;
	}
	.img {
		flex: 1 0 100%;
		max-width: 400px;
	}
	.text {
		display: flex;
		flex: 1 0;
		flex-direction: column;
		gap: 1rem;
		min-width: 400px;
	}

	.text > :global(button) {
		margin: auto;
		max-width: 20ch;
	}
</style>
