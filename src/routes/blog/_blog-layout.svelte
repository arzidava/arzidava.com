<script>
    import formatDate from '../../utils/formatDate'
    import Header from '../../components/Header.svelte'
    import Section from '../../components/Section.svelte'
    import SocialMediaCard from '../../components/SocialMediaCard.svelte'

    export let slug
    export let title
    export let date
</script>

<style>
    article {
        line-height: 20px;
        margin: 1rem 0;
    }
    article > :global(* + *) {
        margin-top: 20px;
    }
    article > :global(h1, h2) {
        transform: translateY(-2px);
    }
    article :global(code) {
        background-color: var(--white);
        color: var(--primary);
        padding: 0 .25rem;
    }
    article :global(pre) {
        background-color: var(--white);
        border-left: 2px solid var(--secondary);
        color: var(--primary);
        display: block;
        overflow-x: auto;
        margin-top: 20px;
        padding: .75rem;
        transform: translateY(-4px);
    }
    
    article :global(a) {
        color: var(--secondary-light);
        display: inline-block;
        margin: 0 -.5ch;
        padding: 0 .5ch;
        text-decoration: underline;
    }

    article :global(a):hover,
    article :global(a):focus {
        background-color: var(--secondary);
        color: var(--white);
        outline: none;
        text-decoration: none;
    }

    article :global(img) {
        border: .5rem solid var(--white);
        border-radius: .25rem;
        display: block;
        margin: .5rem;
    }
    .pub {
        color: var(--white);
        padding: .5rem;
    }
    article :global(hr) {
        border-color: var(--white);
        border-style: solid;
        border-width: 1px 0 0 0;
    }
</style>


<svelte:head>
    <title>arzidava {title}</title>
    <link rel="stylesheet" href="./prism.css">
    <meta name="description" content="{title}">
</svelte:head>

<SocialMediaCard content="article" url="blog/{slug}" title="{title}" description="{description}" />

<Header>{title}</Header>
<span class="pub">Published on {formatDate(date)}</span>

<Section>
    <article>
        <slot></slot>
    </article>
</Section>