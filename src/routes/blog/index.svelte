<script context="module">
    export function preload() {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
	import SocialMediaCard from '../../components/SocialMediaCard.svelte'
	import formatDate from '../../utils/formatDate.js'
	import { pagetitle } from '../../store.js'
	
	export let posts = []

	pagetitle.set('articles')
</script>

<style>
	ul {
		display: grid;
		gap: 1rem;
		grid-auto-flow: row;
		grid-auto-rows: minmax(2rem, max-content);
		grid-template-columns: 1fr 1fr;
		list-style-type: none;
	}
	li {
		background-color: var(--white);
		border: 2px solid var(--secondary-light);
		border-radius: 1rem;
		color: var(--black);
		grid-row: span 2;
		overflow: hidden;
	}
	a {		
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1rem 1rem 0 1rem;
		width: 100%;
	}
	a > span.date {
		color: var(--grey);
		font-size: .875rem;
	}
	a > span.title {
		align-self: center;
		flex: 1 0;
		padding: .5rem 0;
	}
	a:hover {
		background-color: var(--secondary-light);
	}
	.filler {
		grid-row: span 1;
		opacity: 0;
	}
	@media screen and (max-width: 600px) {
		.filler {
			display: none;
		}
		ul {
			grid-template-columns: 1fr;
		}
	}
</style>

<SocialMediaCard description="Stephane Vanraes' Blog" title="arzidava - articles" type="website" />

<ul>
	<li class="filler" aria-hidden="true"></li>
	{#each posts as post}
		<li class="shadow">			
			<a rel='prefetch' href="/blog/{post.slug}">
				<span class="date">{formatDate(post.date)}</span>
				<span class="title">{post.title}</span>
			</a>
		</li>
	{/each}
</ul>