<script>
	import FrontpageNavigation from './_home/FrontpageNavigation.svelte';
	import Intro from './_home/Intro.svelte';
	import LatestArticles from './_home/LatestArticles.svelte';

	let { data } = $props();
</script>

<Intro />

<FrontpageNavigation />

<hr />

<LatestArticles posts={data.posts} />
