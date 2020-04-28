<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            console.log(posts);
            return { posts: posts.slice(0, 10) }
        });
    }
</script>

<script>
    import ArticleList from '../components/ArticleList.svelte'

    export let posts
</script>

<style>
    .index {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    section {
        flex: 1 0 calc(275px);
        margin: 1rem .5rem 0;
    }
    section > div {
        background-color: var(--black);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        display: flow-root;
        padding: 1rem;
    }
    img {
        border-radius: 50%;
        float: left;
        margin: 0 1rem 1rem 0;
        shape-outside: circle(50%);
        width: 150px;
    }
    @media screen and (max-width: 700px) {
        .index {
            flex-direction: column;
        }
        section {
            flex: 0 1 0px;
        }
    }
</style>

<h1>arzidava</h1>
<div class="index">
    <section>
        <div>
            <img src="stephane.jpg" alt="Picture of me">
            <h2>Hi!</h2>
            <p>I am Stephane Vanraes, a Bergen based developer specialized in Frontend solutions.</p>
            <p>When I am not hiking up some mountain, you might find me dabbling around with HTML, CSS and JavaScript at my computer trying to make lightweight, responsive and accessible websites.</p>
        </div>
    </section>
    <section>
        <div class="stack">
            <h2>Latest Articles</h2>
            <ArticleList {posts} />
        </div>
    </section>
</div>
