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
    import formatDate from '../../utils/formatDate.js'
    export let post
</script>

<style>
    article {
        background: var(--black);
        color: var(--white);
        border-radius: .5rem;
        display: block;
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
    .pub {
        color: var(--white);
        padding: .5rem 1.5rem;
    }
    h1 {
        padding-right: 3.5rem;
    }
</style>

<svelte:head>
    <title>arzidava {post.title}</title>
    <meta name="description" content="{post.summary}">
</svelte:head>

<h1>{post.title}</h1>
<span class="pub">Published on {formatDate(post.date)}</span>

<article>
    {@html post.html}
</article>
