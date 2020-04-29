<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts: posts.slice(0, 10) }
        });
    }
</script>

<script>
    import ArticleList from '../components/ArticleList.svelte'
    import Logo from '../components/Logo.svelte'    

    export let posts
</script>

<style>
    .index {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    h2 {
        margin-top: 0;
    }

    h1 > span {   
        display: inline-block;     
        height: 40px;
        margin-right: 1rem;
        vertical-align: middle;
        width: 40px;
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
    
    a {
        color: var(--secondary-light);
        display: inline-block;
        margin: 0 -.5ch;
        padding: 0 .5ch;
        text-decoration: underline;
    }
    a:hover {
        background-color: var(--secondary);
        color: var(--white);
        text-decoration: none;
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

<svelte:head>
    <title>arzidava</title>
    <meta name="description" content="The personal website of Stephane Vanraes, with articles on frontend development subjects.">
</svelte:head>

<h1><span><Logo  /></span>arzidava</h1>
<div class="index">
    <section>
        <div class="stack">
            <img src="stephane.jpg" alt="Picture of me">
            <h2>Hi!</h2>
            <p>I am Stephane Vanraes, a Bergen based developer specialized in Frontend solutions.</p>
            <p>When I am not hiking up some mountain, you might find me dabbling around with HTML, CSS and JavaScript at my computer trying to make lightweight, responsive and accessible websites.</p>
            <p>Over the years I have learned to appreciate SCSS for styling and Svelte for UI components, in fact this site itself is made using Svelte and Sapper).</p>
            <p>If you want me to join your team (if I am available) for a while, or need someone to help you with Svelte training or other, have a look at the <a href="./aboutme">about me</a> page to get an idea what I have to offer and how to contact me (hint it's the <a href="./contact">contact</a> page)</p>
        </div>
    </section>
    <section>
        <div class="stack">
            <h2>Latest Articles</h2>
            <ArticleList {posts} />
        </div>
    </section>
</div>
