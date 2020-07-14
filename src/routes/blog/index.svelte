<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    import { background, colours, pagetitle } from '../../stores.js'

    import Tags from '../../components/Tags.svelte'
    import TextField from '../../components/TextField.svelte'

    export let posts = []

    let filter = ""
    $: filteredPosts = filter.length >= 3
        ? posts.filter(p => p.tags.some(t => t.includes(filter.toLowerCase())) || p.title.toLowerCase().includes(filter.toLowerCase()))
        : posts

    const selectTag = (ev) => filter = ev.detail.tag

    background.set($colours.primaryLight)
    pagetitle.set('articles')
</script>

<style>
    ul {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 150px;
        list-style-type: none;
        margin-top: 1rem;
    }
    li {
        background-color: var(--primary);
        box-shadow: 2px 2px 2px var(--black);
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem 0 1rem;
        position: relative;
    }

    li:focus-within,
    li:hover {
        background-color: var(--secondary-dark);
    }

    a {
        flex: 2 0;
        position: relative;
    }

    a:focus {
        outline: none;
    }

    a + :global(*) {
        flex: 0 0;
    }

    span {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        text-align: center;
    }
</style>

<svelte:head>
    <title>arzidava - blog</title>
    <meta name="description" content="A series of articles written by Stephane Vanraes">
</svelte:head>

<TextField label="Filter by tag or title" bind:value={filter} class="articles-search" />

<ul>
    {#each filteredPosts as post}
    <li>
        <a rel='prefetch' href='blog/{post.slug}'>
            <span>{post.title}</span>
        </a>
        <Tags on:select="{selectTag}" tags={post.tags} />
    </li>
    {/each}
</ul>