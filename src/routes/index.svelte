<script>
</script>

<style>
    .title {
        font-size: 1.25rem;
        grid-column: 2 / 6;
        grid-row: 3 / 4;
        max-width: 350px;
    }

    h1 {
        font-size: 4em;
        color: var(--white);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    .intro {
        background-color: var(--primary);
        box-shadow: 4px 4px 4px rgba(0,0,0,.75);
        color: var(--white);
        padding: 1rem;
    }
    @media screen and (min-width: 500px) {
        .title {
            margin-left: 100px;
        }
    }
    nav {
        align-self: end;
        font-size: 1.25rem;
        grid-column: 5 / 6;
        grid-row: 5 / 6;
    }
    nav > a {
        background-color: var(--primary);
        box-shadow: 4px 4px 4px rgba(0,0,0,.75);
        color: var(--white);
        display: block;
        padding: .5rem 1rem;
    }
    nav > a + a {
        margin-top: .5rem;
    }
    nav > a:focus,
    nav > a:hover {
        background-color: var(--secondary);
    }
    .accent {
        background-color: var(--secondary);
    }
</style>

<div class="title">
    <h1>arzidava</h1>
    <div class="intro">
        <p>Hi,</p>
        <p>I am Stephane Vanraes, a Bergen based web developer with a passion for lightweight, responsive and accessible websites.</p>
    </div>
</div>
<nav>
    <a href="/about">about</a>
    <a href="/blog">blog</a>
    <a class="accent" href="/contact">contact</a>
</nav>
