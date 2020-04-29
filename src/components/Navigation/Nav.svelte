<script>
	import Button from '../Button.svelte'
	import MenuItem from './MenuItem.svelte'
	
	import { spring } from 'svelte/motion';
	
	let open = false

	const rotation = spring(90, {
		stiffness: 0.1,
		damping: 0.2
	});
	$: open ? rotation.set(0) : rotation.set(90)

	const handleClick = ev => {
		ev.preventDefault();
		ev.stopPropagation();
		open = !open;
		return false;
	}
	
	export let segment
</script>

<style>
	nav {
        right: 0;
		position: fixed;
		top: 0;
		z-index: 5;
	}
	nav > :global(button) {
		height: 3rem;
		padding: .25rem;
		position: absolute;
		right: 1rem;
		stroke: var(--white);
		top: 1rem;
		width: 3rem;
		z-index: 5;
	}
	.menu {
		height: 200px;
		position: absolute;
		right: 0;
		top: 0;
		width: 200px;
		z-index: 1;
	}
	.arc {
		transform: rotate(var(--rotation));
		transform-origin: 100% 0;
	}
	.arc > path {
		fill: var(--primary);
		opacity: .75;
	}
</style>

<svelte:window on:click="{() => open = false}"></svelte:window>

<nav>
	<Button on:click="{handleClick}" shadow>
		<svg viewBox="0 0 10 10" height="100%" width="100%">
			<path d="M1,2h8M1,5h8,M1,8h8"  stroke-width="1" stroke-linecap="round"/>
		</svg>
	</Button>
	{#if open}
		<svg class="menu" viewBox="0 0 100 100">
			<g class="arc" style="--rotation: {$rotation}deg">
				<path d="M 0 0 A 100 100 0 0 0 100 100 v -100 z" />
				<MenuItem active={segment === undefined} index={0} href="./" label="home" />
				<MenuItem active={segment === 'about'} index={1} href="./about" label="about" />
				<MenuItem active={segment === 'blog'} index={2} href="./blog" label="blog" />
				<MenuItem active={segment === 'contact'} index={3} href="./contact" label="contact" />
			</g>
		</svg>
	{/if}
</nav>

<!-- hidden navigation for exporting 
<a href="./"></a>
<a href="./about"></a>
<a href="./blog"></a>
<a href="./contact"></a>
<a href="./error"></a>
-->
