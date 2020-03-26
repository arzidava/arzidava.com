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
    p {
        margin-top: .5rem;
    }
    h2 {
        color: var(--primary);
        font-size: 1.125em;
        font-weight: 600;
    }
</style>

<div class="about">
    <img src="/stephane.jpg" alt="Picture of me">
    <div>
        <h2>Hi!</h2>
        <p>I am Stephane Vanraes, a Bergen based web developer.</p>
        <p>With several years of experience working on a variety of projects I have obtained a solid knowledge of JavaScript, HTML and CSS, the foundation blocks of all frontends.  On the backend I have experience with NodeJS, C# and MySQL (but I prefer doing frontend work).</p>
        <p>Over the years I have grown passionate about creating a more lightweight, responsive and accessible web, and I hold those values high in every single project I work on.  For the past years I have intensively used <a external href="http://www.svelte.dev">Svelte</a> as my framework of choice as it makes achieving that goal easy.</p>
    </div>
</div>
<hr/>
<div class="sections">
    <section>
        <h2>Lightweight</h2>
        <p>Nowadays web applications are more complex and advanced than ever.  But this complexity comes with a cost, namely download sizes.  Images, videos and interactive scripts all add up to sometimes rather 'heavy' websites. These large files can make your website feel slow and old, not to mention those of us that are on metered connection or have older machines.</p>
        <p>Because of this I always aim in all my projects to have small bundle sizes without sacrificing complexity, in order to have sites that load lightning fast without putting a strain on those with slower or limited devices and networks.</p>
    </section>
    <section>
        <h2>Responsive</h2>
        <p>With plenty of different devices, each with their own dimensions and quirks, responsive design can no longer be neglected.  But it also means that it is hard to say what dimensions define a mobile phone, tablet or computer.</p>
        <p>For me that means that device breakpoints are a thing of the past. My projects always start from the smallest screen first and I manually make it larger <strong>until</strong> it breaks; that's where my breakpoint is.  This might mean that different components can have different breakpoints but ensures the best responsive design to have.</p>
    </section>
    <section>
        <h2>Accessible</h2>
        <p>All people are different.</p>
        <p>And most of us will at some point in our lives be at a disadvantage in some way or another. Be that temporary like having your legs in a cast after an unfortunate accident, desoriented from medications to permanent like Parkinson's or being blind.</p>
        <p>Regardless of who you are, where you are and how you are, a good website will be usable by you.  This is were accessibility becomes important, because it means to not excluded anyone and to have good accessibility it is important this is not an afterthought, but is included in the design from the very beginning.</p>
    </section>
</div>