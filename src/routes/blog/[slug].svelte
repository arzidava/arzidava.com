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
        background: linear-gradient(to bottom, var(--white) 19px, var(--primary--light) 19px, var(--primary--light) 20px);
        background-size: 100% 20px;
        border-radius: .5rem;
        display: block;
        line-height: 20px;
        padding: 23px 15px;
    }
    article > :global(* + *) {
        margin-top: 20px;
    }
    article > :global(h1, h2) {
        transform: translateY(-2px);
    }
    article :global(code) {
        border-left: 2px solid var(--accent);
        color: var(--accent);
        display: block;
        overflow-x: auto;
        padding-left: 12.5px;
        transform: translateY(-4px);
    }
</style>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<article>
    <h1>{post.title}</h1>
    {@html post.html}
</article>
