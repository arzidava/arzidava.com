<script context="module">
    export async function preload({ params, query }) {
        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import Header from '../../components/Header.svelte'
    import Section from '../../components/Section.svelte'
    import SocialMediaCard from '../../components/SocialMediaCard.svelte'
    import formatDate from '../../utils/formatDate.js'
    export let post
</script>

<style>
    article {
        line-height: 20px;
        margin: 1rem 0;
        padding: 23px 15px;
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
</style>

<svelte:head>
    <title>arzidava {post.title}</title>
    <meta name="description" content="{post.summary}">
</svelte:head>

<SocialMediaCard content="article" url="blog/{post.slug}" title="{post.title}" description="{post.summary}" />

<Header>{post.title}</Header>
<span class="pub">Published on {formatDate(post.date)}</span>

<Section>
    <article>
        {@html post.html}
    </article>
</Section>
