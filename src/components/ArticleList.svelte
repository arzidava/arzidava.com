<script>
    import formatDate from '../utils/formatDate.js'
    export let posts = [];
</script>

<style>
    ul {
        list-style-type: none;
    }
    a {        
        display: block;
        margin: -0.25rem -1rem;
        padding: 0.25rem 1rem;
    }
    a > span:first-child {
        text-decoration: underline;
    }
    a:focus,
    a:hover {        
        background-color: var(--secondary-dark);
        color: var(--white);
        outline: none;
        text-decoration: none;
    }
</style>

<ul class="stack">
    {#each posts as post}
        <li>
            <a href="/blog/{post.slug}">
                <span>{post.title}</span> - <span>{formatDate(post.date)}</span>
            </a>
        </li>
    {/each}
</ul>