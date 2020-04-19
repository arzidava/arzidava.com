<style>
    hr {
        background-color: var(--secondary);
        height: 2px;
        margin: 1rem auto;
        width: 80vw;
    }
    .about {
        padding: 1rem;
    }
    .about > img {
        border: 2px solid var(--primary);
        border-radius: 50%;
        float: left;
        margin: 0 1rem 1rem 0;
        max-height: 150px;
        shape-outside: circle(50%);
    }
    @media screen and (min-width: 500px) {
        .about > div {
            padding-left: 100px;
        }
    }
    .sections {
        display: grid;
        grid-gap: 1rem;
        grid-auto-rows: auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    section {
        padding: 1rem;
    }
    p, ul {
        margin-top: .5rem;
    }
    h2 {
        color: var(--primary);
        font-size: 1.125em;
        font-weight: 600;
    }
    ul {
        padding-left: 1rem;
    }
    a {
        color: var(--primary);
    }
</style>

<div class="about">
    <img src="/stephane.jpg" alt="Picture of me">
    <div>
        <h2>Hi!</h2>
        <p>I am Stephane Vanraes, a Bergen based web developer.</p>
        <p>Over the years I have become very passionate about creating lightweight, responsive and accessible web applications and keeping true to foundations of the web: HTML, JavaScript and CSS.</p>
    </div>
</div>
<hr/>
<div class="sections">
    <section>
        <h2>Articles</h2>
        <p>If I get around to do so I write small articles and tutorials about frontend related topics, the latest one can be found here: %%LATEST_ARTICLE%%</p>
    </section>
    <section>
        <h2>Helping out</h2>
        <p>Nobody is perfect (neither am I) and sometimes we all need some help, if so desired I can help you or your team out with:</p>
        <ul>
            <li>Small scale web applications</li>
            <li>Svelte training</li>
            <li>General Javascript support</li>
        </ul>
        <p>Just head over to the <a href="/contact">Contact page</a> and send me a message.</p>
    </section>
</div>