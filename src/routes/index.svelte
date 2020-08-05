<script context="module">
    export function preload() {
        return this.fetch(`../blog.json`).then(r => r.json()).then(posts => {
            return { posts: posts.slice(0, 10) }
        });
    }
</script>

<script>
	import Button from '../components/Button.svelte'
	import SocialMediaCard from '../components/SocialMediaCard.svelte'
	import formatDate from '../utils/formatDate.js'
	import { pagetitle } from '../store.js'
	
	export let posts = []
	
	pagetitle.set('')
</script>

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		min-height: calc(100vh - 3rem);
		padding: 1rem;
	}
	.home {
		align-items: center;
		color: var(--black);
		flex: 0 100%;
		font-size: 1.125rem;
		min-height: 200px;
		text-align: center;
	}
 	h1 > span {
		display: inline-block;
		height: 40px;
		margin-right: 1rem;
		vertical-align: middle;
		width: 40px;
    }

  	.articles {
		align-self: flex-start;
		background-color: var(--secondary-light);
		color: var(--black);
		flex: 1 0 300px;
		list-style-type: none;
		margin-bottom: 1rem;
		text-align: left;
	}
    .articles > li {
      	display: block;
    }
	.articles > li > a {
		display: block;
		padding: .25rem 1rem;
		width: 100%;
	}
	.articles > li > a:active,
	.articles > li > a:focus,
	.articles > li > a:hover {
		background-color: var(--primary-light);
	}
	.articles > li > a > span {
		color: var(--black);
		display: block;
		font-size: .75rem;
		margin-bottom: .25rem;
		margin-left: .25rem;
	}
  	.buttons {
		align-self: flex-end;
		flex: 1 0 300px;
		list-style-type: none;
	}
    .buttons > li {
		display: block;
		margin-left: auto;
		width: 20ch;
    }
	.buttons > li > :global(button) {
		width: 100%;
	}

</style>

<SocialMediaCard description="lightweight, accessible and simple web development" title="arzidava" type="summary" />

<div class="wrapper">
  <div class="home">
    <h1><span class="svelte-ymced8"><svg class="svelte-vl2ttn" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 82.5 A 49 49 0 1 1 90 82.5 H 85 A 45 45 0 1 0 15 82.5 Z M 24 82.5 V 55 H 34 V 82.5 Z M 38 82.5 V 39 H 48 V 82.5 Z M 52 82.5 V 39 H 62 V 82.5 Z M 66 82.5 V 55 H 76 V 82.5 Z" fill="currentColor"></path>
        </svg></span>arzidava</h1>
    <p>web development</p>
    <p>lightweight ∣ accessible ∣ simple</p>
  </div>
  <ul class="articles shadow">
	{#each posts as { date, slug, title }}
		<li><a href="/blog/{slug}"><span>[{formatDate(date)}]</span>{title}</a></li>
	{/each}
  </ul>
  <ul class="buttons stack">
    <li><Button href="/services" shadow>Services</Button></li>
    <li><Button href="/blog" shadow>Articles</Button></li>
    <li><Button href="/about" shadow>About</Button></li>
    <li><Button href="/contact" shadow>Contact</Button></li>
  </ul>
</div>