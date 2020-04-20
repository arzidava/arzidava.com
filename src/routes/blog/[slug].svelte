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
        background: linear-gradient(to bottom, var(--white) 24px, var(--primary--light) 1px);
        background-size: 100% 25px;
        border-radius: .5rem;
        display: block;
        padding: 25px 15px;
    }
    h1, article :global(h2), article :global(p) {
        line-height: 25px;
    }
    h1, article :global(h2), article :global(p):not(:last-child) {
        display: block;
        margin-bottom: 25.5px;
    }

    article :global(code) {
        border-left: 2px solid var(--accent);
        color: var(--accent);
        display: block;
        line-height: 25px;
        margin-bottom: 25.5px;
        padding-left: 12.5px;
    }
</style>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<article>
    <h1>{post.title}</h1>
    {@html post.html}
</article>
