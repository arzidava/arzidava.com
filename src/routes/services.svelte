<script>
    import Button from '../components/Button.svelte'
    import Section from '../components/Section.svelte'
	import { backdropColour, pagetitle } from '../store.js'

    backdropColour.set('blue')
    pagetitle.set('services')
</script>

<style>
    .wrapper {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }
    .wrapper > :global(*:nth-child(1)) {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }
    .wrapper > :global(*:nth-child(2)) {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }
    .wrapper > :global(*:nth-child(3)) {
        grid-column: 1 / 4;
        grid-row: 3 / 4;
    }
    .small {
        color: var(--grey);
        font-size: .875rem;
    }

    @media screen and (max-width: 750px) {
        .wrapper {
            display: block;
        }
        .wrapper > :global(* + *) {
            margin-top: 1rem;
        }
    }
</style>

<div class="wrapper">
    <Section stack>
        <h2>Svelte Training</h2>
        <p>In the latest surveys concerning JavaScript libraries and frameworks, Svelte often comes up as a very anticipated package.  It promises easier development, faster rendering, smaller bundles and claims to be easier to learn as well.</p>
        <p>Naturally, it follows there is a surge in interest in learning Svelte, with blog post and guides in several places.  But sometimes it benefits to just have somebody come down and explain it to you, do some programming together and get hands on with the framework.</p>
        <p>That person could be me 💡</p>
        <p>I have been using Svelte for three years (from v1, v2 and now v3) and gladly spread the word of this amazing framework.  If I come to your offices, you'll get a hands-on teaching approach covering the basics of the framework and more in 3 to 5 days.  Just contact me for more details.</p>
        <Button href="/contact" shadow>Get Training</Button>
        <p class="small">(Due to travel restrictions, Norway only, I'm sorry)</p>
    </Section>
    <Section stack>
        <h2>Code Reviews</h2>
        <p>Working on a Svelte project ?</p>
        <p>Do you want to an extra pair of eyes to skim through your code ? Or simply need somebody trash talking your code 😆 I can give thorough, honest feedback for small to medium projects.</p>
        <Button href="/contact" shadow>Prepare the axes</Button>
        <p class="small">(code wise only, don't ask me about design...)</p>
    </Section>
    <Section stack>
        <h2>Mentoring</h2>
        <p>Do you find yourself always getting stuck on your projects ?</p>
        <p>It can help to talk to somebody for a while, going through the problem and come up together with solutions. With a simple video call and screen sharing this can be easily setup. Send me a message with a short description of your project and what times you normally work on your project.</p>
        <Button href="/contact" shadow>Get help</Button>
    </Section>
</div>