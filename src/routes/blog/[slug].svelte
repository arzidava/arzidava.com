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
        border-left: 2px solid var(--accent);
        color: var(--accent);
        display: block;
        overflow-x: auto;
        padding: .75rem;
        transform: translateY(-4px);
    }
</style>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<article>
    {@html post.html}
</article>
