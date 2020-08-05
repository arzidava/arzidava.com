<script>
	import { backdropColour, pagetitle } from '../../store.js'

    import formatDate from '../../utils/formatDate'
    import SocialMediaCard from '../../components/SocialMediaCard.svelte'

    //export let slug
    export let summary
    export let title
    export let date

	backdropColour.set('blue')
    pagetitle.set('articles')    
</script>

<style>
    article {
        background-color: var(--white);
        border: 2px solid var(--black);
        border-radius: .5rem;
        color: var(--black);
        padding: .5rem 1rem;
    }
    
    article :global(pre) {
        border-left: 2px solid var(--secondary-light);
        border-radius: 0 .5rem .5rem 0;
        display: block;
        overflow-x: auto;
        padding: .75rem;
        padding-top: 0;
    }

    article :global(code:not([class])) {
        background-color: var(--grey-light);
        padding: 0 0.25rem;
    }

    .pub {
        color: var(--grey);
    }
    article :global(hr) {
        border-color: var(--secondary-light);
        border-style: solid;
        border-width: 1px 0 0 0;
    }
</style>

<svelte:head>
    <link rel="stylesheet" href="/prism.css">
</svelte:head>

<SocialMediaCard description={summary} title={title} type="article" />

<article class="stack">
    <h1>{title}</h1>
    <span class="pub">Published on {formatDate(date)}</span>
    <hr />
    <slot></slot>
</article>