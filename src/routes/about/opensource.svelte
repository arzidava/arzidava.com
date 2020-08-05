<script>
    import { Carousel } from 'renderless-svelte'
    import Section from '../../components/Section.svelte'

    const items = [
        { 
            title: 'Renderless Svelte',
            body: 'A collection of reusable, renderless components encapsulating common behaviour in a non styled way, very easy to embed in your own projects. Including this very carousel and others.',
            link: 'https://www.renderless-svelte.dev',
            linkText: 'renderless-svelte.dev'
        },
        { 
            title: 'Svelte Multitone Image',
            body: 'Package to turn images in duotone (or more!).',
            link: 'https://www.npmjs.com/package/svelte-multitoneimage',
            linkText: 'On NPM'
        },
        { 
            title: 'Svelte Progress Circle',
            body: 'It is all in the name: a component to render progress bar in a circular format, plain and simple but rather powerfull if used correctly.',
            link: 'https://www.npmjs.com/package/svelte-progresscircle',
            linkText: 'On NPM'
        }
    ]
</script>

<style>
    .wrapper {
        align-items: center;
        display: flex;
        margin: 1rem auto;
        max-width: 500px;
        width: 100%;
    }
    .wrapper > button {
        background: transparent;
        border: 0;
        color: var(--secondary-light);
        cursor: pointer;
        height: 0;
        margin: 1rem;
        width: 0;
    }
    .wrapper > button:active,
    .wrapper > button:hover,
    .wrapper > button:focus {
        color: var(--primary);
        outline: none;
    }
    .wrapper > button > span {
        display: block;
        font-size: 0;
        height: 0;
        width: 0;
    }
    .wrapper > button:first-child {
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;        
        border-right:40px solid currentColor; 
    }
    .wrapper > button:last-child {
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;        
        border-left:40px solid currentColor; 
    }
    .card {        
        border: 2px solid var(--secondary-light);
        border-radius: .5rem;
        display: flex;
        flex: 1 0;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: .75rem;
    }
    .card > p {
        flex: 1 0;
    }
</style>

<Section stack>
    <p>As a starting developing (and now still) I have received a lot of support from the community at large and like many others I too have benefited from open source projects. It is only normal to try and give back, I do this by answering StackOverflow question, being active on several programming chats and by publishing some libraries on npm.  Here is a selection of some of these packages.</p>
    <Carousel {items} let:controls let:payload loop>
        <div class="wrapper">
            <button type="button" on:click={controls.previous}>
                <span>Previous</span>
            </button>
            <div class="card stack">
                <h2>{payload.title}</h2>
                <a href="{payload.link}" target="_blank">{payload.linkText}</a>
                <p>{payload.body}</p>
            </div>
            <button type="button" on:click={controls.next}>
                <span>Next</span>
            </button>
        </div>
    </Carousel>
</Section>
