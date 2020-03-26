<script>
</script>

<style>
    nav {
        position: absolute;
        bottom: 1em;
        color: var(--white);
        font-size: 1.5rem;
        right: 1em;
    }

    a {
        background-color: rgba(0,0,0,.75);
        display: block;
        padding: .5em 1em;
    }
    a:focus,
    a:hover {
        background-color: var(--primary);
    }
    a + a {
        margin-top: .5em;
    }
    .title {
        position: absolute;
        color: var(--white);
        top: 58px;
        left: 17px;
        max-width: 550px;
        right: 17px;
    }
    @media screen and (max-height: 456px) {
        .title {
            right: 174px;
        }
    }
    .title > h1 {
        font-size: 3rem;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    
    .presentation {
        background-color: rgba(0, 0, 0, 0.75);
        font-size: 1.25rem;
        padding: 1em 2em;
    }

</style>

<div class="title">
    <h1>arzidava</h1>
    <div class="presentation">
        <p>Hi,</p>
        <p>I am Stephane Vanraes, a Bergen based web developer with a passion for lightweight, responsive and accessible websites.</p>
    </div>
</div>
<nav>
    <a href="/about">about</a>
    <!--<a href="/blog">blog</a>
    <a href="/portfolio">portfolio</a>-->
    <a href="/contact">Contact</a>
</nav>
