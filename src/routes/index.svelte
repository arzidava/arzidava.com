<style>
    .about {
        background-color: var(--white);
        border: 2px solid var(--primary);
        min-height: 100px;
        padding: 1rem;
    }
    .about > img {
        border: 3px solid var(--primary);
        border-radius: 50%;
        float: left;
        margin: 0 1rem 1rem 0;
        max-height: 150px;
        shape-outside: circle(50%);
    }
    .about > div {
        padding-left: 100px;
    }
    @media screen and (max-width: 500px) {
        .about {
            min-height: 175px;
        }
        
    }
    .sections {
        display: grid;
        grid-gap: 1rem;
        grid-auto-rows: auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin: 1rem 0;
    }
    section {
        background-color: var(--white);
        border: 2px solid var(--primary);
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
        <p>I am Stephane Vanraes, a Bergen based web developer with a passion for lightweight, repsonsive and accessible web applications.</p>
    </div>
</div>
<div class="sections">
    <section>
        <h2>Articles</h2>
        <p>If I get around to do so I write small articles and tutorials about frontend related topics, the latest one can be found here: %%LATEST_ARTICLE%%</p>
    </section>
    <section>
        <h2>What I do</h2>
        <p>I have experience and especially enjoy working with</p>
        <ul>
            <li>Javascript</li>
            <li>CSS</li>
            <li>Svelte / Sapper</li>
            <li>SCSS</li>
        </ul>
        <p>If you want to know more about me just head over to the <a href="/contact">Contact page</a> and send me a message.</p>
    </section>
</div>