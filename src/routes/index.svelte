<script context="module">
	export async function load({ fetch }) {
		const articles = await fetch('/blog.json?limit=5').then((res) => res.json());
		const snippets = await fetch('/code.json?limit=5').then((res) => res.json());

		return {
			props: {
				articles,
				snippets
			}
		};
	}
</script>

<script>
	import Icon from '$lib/components/Icon.svelte';
	import LinkList from '$lib/components/LinkList.svelte';

	export let articles = [];
	export let snippets = [];
</script>

<section id="intro">
	<Icon name="logo" />
	<span class="title">arzidava</span>
	<p>web development</p>
	<p>lightweight ∣ accessible ∣ simple</p>
</section>

<div id="links">
	<a href="/about" class="ltr">About me</a>
	<a href="/projects" class="rtl">Projects</a>
</div>
<div class="wrapper">
	<section id="articles">
		<h1>Latest Articles</h1>
		<LinkList links={articles} />
		<a href="/blog">All articles</a>
	</section>
	<section id="code">
		<h1>Latest Snippets</h1>
		<LinkList links={snippets} />
		<a href="/code">All snippets</a>
	</section>
</div>

<style>
	#intro {
		align-items: center;
		background-color: hsl(var(--primary) / 0.2);
		backdrop-filter: blur(1rem);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		padding: 1rem 10%;
		margin: auto;
		max-width: max-content;
	}
	#intro :global(svg) {
		font-size: 4rem;
	}
	#intro .title {
		font-size: 1rem;
		font-weight: 600;
		margin-top: -0.75rem;
		text-transform: uppercase;
	}

	#links {
		display: flex;
		margin: 10vh auto;
		max-width: 400px;
		width: 100%;
	}

	#links a {
		border: 0;
		flex: 0 0 calc(50% - 0.5rem);
		font-size: 1.25rem;
		font-weight: 600;
		padding: 0.5rem 1rem;
		text-align: center;
	}

	#links a:first-child {
		margin-right: 1rem;
	}

	#links a:after {
		background-color: hsl(var(--secondary));
		content: '';
		inset: 0;
		position: absolute;
		z-index: -2;
	}

	.wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 10vh;
	}

	.wrapper > * {
		flex: 1 0 45ch;
		max-width: 100%;
	}

	.wrapper section {
		background-color: hsl(var(--secondary));
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
	}

	.wrapper section :global(*:nth-child(2)) {
		flex: 1 0;
	}

	h1:after {
		background-image: paint(curvy-strip);
		content: '';
		display: block;
		height: 1rem;
		margin: 0 -1rem;
	}

	a {
		align-self: flex-end;
	}
</style>
