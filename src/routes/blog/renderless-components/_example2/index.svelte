<script>
	import { slide } from 'svelte/transition';
	import AccordionGroup from './AccordionGroup.svelte';
	import Accordion from './Accordion.svelte';
</script>

<div class="wrapper">
	<AccordionGroup>
		<Accordion>
			<button slot="header" let:toggle on:click={toggle}>Ålesund</button>
			<img transition:slide src="/images/alesund.png" alt="" />
		</Accordion>
		<Accordion>
			<button slot="header" let:toggle on:click={toggle}>Trollstigen</button>
			<img transition:slide src="/images/trollstigen.png" alt="" />
		</Accordion>
		<Accordion>
			<button slot="header" let:toggle on:click={toggle}>Jotunheimen</button>
			<img transition:slide src="/images/jotunheimen.png" alt="" />
		</Accordion>
	</AccordionGroup>
</div>

<style>
	.wrapper > :global(*) {
		margin: 0;
	}
	div {
		display: flex;
		flex-direction: column;
		width: 400px;
	}
	button {
		padding: 1rem;
	}
	img {
		height: 300px;
		width: 400px;
	}
</style>
