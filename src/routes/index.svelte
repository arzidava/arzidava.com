<script>
</script>

<style>
    .about {
        align-items: center;
        display: flex;
        margin: 0 0 0 auto;
        max-width: 450px;
        padding: 1rem;
    }
    .about > img {
        border: 2px solid var(--primary);
        border-radius: 50%;
        flex: 0 0;
        height: 33vw;
        max-height: 150px;
    }
    .about > div {
        padding: 1rem;
    }
    .about > div > h2 {
        color: var(--primary);
    }
    .sections {
        display: grid;
        grid-gap: 1rem;
        grid-auto-rows: auto;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        padding: 1rem;
    }
    section {
        background-color: var(--primary);
        border-radius: 4px;
        color: var(--white);
        padding: 1rem;
    }
    section:nth-child(2n) {
        background-color: var(--secondary);
    }
    h2 {
        font-size: 1.125em;
        font-weight: 600;
    }
</style>

<div class="about">
    <img src="/stephane.jpg" alt="Picture of me">
    <div>
        <h2>Hi!</h2>
        <p>I am Stephane Vanraes, a Bergen based web developer with a passion for lightweight, responsive and accessible applications.</p>
    </div>
</div>

<div class="sections">
    <section>
        <h2>Lightweight</h2>
        <p>A heavy site not only loses visitors due to loading times, it's also inconsiderate to those with metered connections.</p>
    </section>
    <section>
        <h2>Responsive</h2>
        <p>A good design does not rely on device defined breakpoints but aims to bring the best experience regardless of dimensions.</p>
    </section>
    <section>
        <h2>Accessible</h2>
        <p>Everyone should be able to use your appliction no matter who they are, where they are or how they navigate the internet.</p>
    </section>
</div>