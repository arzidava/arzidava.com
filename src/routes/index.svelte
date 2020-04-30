<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`../blog.json`).then(r => r.json()).then(posts => {
            return { posts: posts.slice(0, 10) }
        });
    }
</script>

<script>
    import Home from './home/index.svelte'
    export let posts = []
</script>

<Home {posts}/>