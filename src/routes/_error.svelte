<script>
	import Button from '../components/Button.svelte'
	import Section from '../components/Section.svelte'

	import { backdropColour, pagetitle } from '../store.js'
	
	const colours = ['green', 'pink','red']

	backdropColour.set(colours[Math.floor(Math.random()*3)])
	pagetitle.set(404)
		
</script>

<style>
	a {
		border-bottom: 2px dashed var(--secondary-light);
		display: inline-block;
		margin-left: -.25ch;
		margin-right: -.25ch;
		padding: 0 .25ch;
	}

	a:active,
	a:hover,
	a:focus {
		background-color: var(--secondary-light);
		border-bottom: 2px solid var(--black);
		color: var(--black);
		outline: none;
		text-decoration: none;
	}
</style>

<Section stack>
	<h2>Oops</h2>
	<p>This page does not seem to exist!!</p>
	<p>And because you are not supposed to be here, I can set the ugliest background colours ever 🤪</p>
	<p>If you got here through a link from me, <a href="/contact" shadow>let me know</a>.</p>
	<p>Otherwise, you might be interested in simply going to <a href="/" shadow>home</a>.</p>
</Section>