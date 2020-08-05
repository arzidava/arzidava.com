<script>
	import { TabControl, TabControlItem } from 'renderless-svelte'
	import { pagetitle } from '../../store.js'
    import SocialMediaCard from '../../components/SocialMediaCard.svelte'
	
	import Button from '../../components/Button.svelte'
	import Arzidava from './arzidava.svelte'
	import OpenSource from './opensource.svelte'
	import Stephane from './stephane.svelte'
	
	pagetitle.set('about')

	const selectTab = (ev, select) => {
		ev.target.blur()
		select()
	}
</script>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		height: 60px;
		list-style-type: none;
		position: relative;
		margin: auto;
		max-width: 400px;
		transition: height 200ms linear;
		width: 100%;
	}

	ul:hover,
	ul:focus-within {
		height: 100px;
	}
	ul > li {
		flex: 1 0;
		height: 40px;
		position: relative;
		transition: top 200ms linear;
	}

	ul > li:first-child {
		flex-basis: 100%;
		width: 100%;
		z-index: 2;
	}
	ul > li:first-child > :global(button) {
		height: 100%;
		width: 100%;
	}

	ul > li:not(:first-child),
	ul > li:not(:first-child) {
		top: -40px;
		z-index: -1;
	}
	
	ul:hover > li:not(:first-child), 
	ul:focus-within > li:not(:first-child) {
		top: 0; 
		z-index: 0;
	}

	@media screen and (max-width: 400px) {
		ul > li > :global(button) {
			padding: .5rem;
		}
	}
</style>

<SocialMediaCard description="About Stephane, the project and other things" title="arzidava" type="website" />

<TabControl>
	<ul slot="tabs" let:tabs>
		{#each tabs.filter(_ => _.active) as { active, payload, select }}
			<li><Button on:click="{ev => selectTab(ev, select)}" shadow>about {payload}</Button></li>
		{/each}
		{#each tabs as { active, payload, select }}
			<li><Button on:click="{ev => selectTab(ev, select)}" shadow>{payload}</Button></li>
		{/each}
	</ul>

	<TabControlItem id="S" payload="Stéphane" active>
		<Stephane />
	</TabControlItem>
	<TabControlItem id="A" payload="Arzidava">
		<Arzidava />
	</TabControlItem>
	<TabControlItem id="O" payload="OpenSource">
		<OpenSource />
	</TabControlItem>
</TabControl>
