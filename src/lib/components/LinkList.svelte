<script>
	import Icon from './Icon.svelte';

	export let empty = 'Nothing found';
	export let icon = 'doc';
	export let links = [];
</script>

<ul>
	{#each links as { href, title }}
		<li>
			<a {href} class="ltr">
				<Icon name={icon} />
				<span>{title}</span>
			</a>
		</li>
	{:else}
		<li class="empty">{empty}</li>
	{/each}
</ul>

<style>
	.empty {
		font-size: 1.125rem;
		font-weight: 600;
		padding: 0.5rem;
		text-align: center;
	}
	li + li {
		margin-top: 0.5rem;
	}
	a {
		align-items: center;
		background-color: hsl(0 100% 100% / 0.8);
		border: 0;
		display: flex;
		gap: 0.5rem;
		padding: 0.25rem 1rem;
	}
	a:before {
		background-color: hsl(0 100% 100% / 1);
		transition-duration: 500ms;
	}
</style>
