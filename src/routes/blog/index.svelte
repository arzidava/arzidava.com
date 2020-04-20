<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    export let posts;
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, 150px);
        grid-auto-rows: 150px;
        list-style-type: none;
    }
    li {
        background-color: var(--yellow);
        box-shadow: 2px 2px 2px var(--black);
        margin: 0 1rem  1rem 0;
        padding: 1rem;
        position: relative;
    }
    a {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    a:hover {
        background-color: var(--primary);
        color: var(--white);
    }
    span {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        text-align: center;
    }
</style>

<ul>
    {#each posts as post}
    <li>
        <a rel='prefetch' href='blog/{post.slug}'>
            <span>{post.title}</span>
        </a>
    </li>
    {/each}
</ul>