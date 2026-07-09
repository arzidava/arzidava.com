<script>
	let { title, date, description, slug } = $props();
</script>

<article>
	<a href="/blog/{slug}">
		<h3>{title}</h3>
	</a>
	<time datetime={date}>
		{new Date(date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</time>
	{#if description}
		<p>{description}</p>
	{/if}
</article>

<style>
	article {
		background-color: white;
		padding: 0.25rem;
	}
</style>
