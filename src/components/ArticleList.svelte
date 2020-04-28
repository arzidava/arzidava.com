<script>
    import formatDate from '../utils/formatDate.js'
    export let posts = [];
</script>

<style>
    ul {
        list-style-type: none;
    }
    a > span:first-child {
        text-decoration: underline;
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