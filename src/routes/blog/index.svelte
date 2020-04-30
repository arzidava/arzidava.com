<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    import Header from '../../components/Header.svelte' 
    export let posts;
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 150px;
        list-style-type: none;
        margin-top: 1rem;
    }
    li {
        box-shadow: 2px 2px 2px var(--black);
        margin: 0 1rem  1rem 0;
        padding: 1rem;
        position: relative;
    }
    a {
        background-color: var(--primary);
        color: var(--white);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0; 
    }
    a:hover {
        background-color: var(--secondary);
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

<Header>articles</Header>

<ul>
    {#each posts as post}
    <li>
        <a rel='prefetch' href='blog/{post.slug}'>
            <span>{post.title}</span>
        </a>
    </li>
    {/each}
</ul>