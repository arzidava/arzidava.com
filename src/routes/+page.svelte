<script>
	import Icon from '$lib/components/Icon.svelte';
	import PostItem from '$lib/components/PostItem.svelte';

	let { data } = $props();
</script>

<section id="intro">
	<Icon name="logo" />
	<h1 class="title">arzidava</h1>
	<p>web development</p>
	<p>lightweight ∣ accessible ∣ simple</p>
</section>

<section id="content">
	<div id="links">
		<a href="/about">About me</a>
		<a href="/blog">Blog</a>
		<a href="/projects">Projects</a>
	</div>
	<div id="articles">
		<h2>Latest Articles</h2>
		<ul>
			{#each data.posts as post}
				<li>
					<PostItem {...post} />
				</li>
				<li>
					<PostItem {...post} />
				</li>
				<li>
					<PostItem {...post} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	#intro {
		background-color: hsl(var(--primary) / 0.2);
		backdrop-filter: blur(1rem);
		display: grid;
		font-size: 1.5rem;
		justify-items: center;
		padding: 1rem;

		> :global(svg) {
			font-size: 16rem;
			translate: 0 3rem;
		}

		h1 {
			font-size: 4rem;
			font-weight: 600;
		}
	}

	#content {
		background-color: hsla(from var(--secondary) h s l / 0.6);
		backdrop-filter: blur(1rem);
		display: grid;
		margin-inline: auto;
		max-inline-size: var(--large-size);

		> div {
			padding: 0.75rem 2rem;
		}

		@media screen and (min-width: 72ch) {
			background-color: unset;
			backdrop-filter: unset;
			gap: 1rem;
			grid-template-columns: 1fr 1fr 1fr;

			> div {
				background-color: hsla(from var(--secondary) h s l / 0.6);
				backdrop-filter: blur(1rem);
			}
			> #links {
				grid-column: 1 / 3;
			}

			> #articles {
				grid-column: 2 / 4;
			}
		}

		#links {
			display: flex;
			gap: 1ch;
			justify-content: space-around;
			margin-inline: auto;
			max-inline-size: calc(max-content);

			> a {
				font-size: 1.25rem;
				font-weight: 600;
				padding: 0.25rem 0.5rem;

				&:is(:active, :focus, :hover) {
					background-color: var(--secondary);
					color: white;
				}
			}
		}

		#articles {
			> h2 {
				font-size: 1.25rem;
				font-weight: 600;
			}

			> ul {
				list-style-type: none;
			}
		}
	}
</style>
