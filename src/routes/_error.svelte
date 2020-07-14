<script>
    import { onDestroy, onMount } from 'svelte'
    import { background, colours, pagetitle } from '../stores.js'
    import Typewriter from 'svelte-typewriter'

    import Button from '../components/Button.svelte'
    import Section from '../components/Section.svelte'

    let done = false

    background.set('#FF1493')
    pagetitle.set('critical error')

    onMount(() => {
        const c1 = setTimeout(() => background.set('#ADFF2F'), 6000)
        const c2 = setTimeout(() => background.set('#FF1493'), 9500)

        return () => {
            clearTimeout(c1)
            clearTimeout(c2)
        }
    })
</script>

<svelte:head>
    <title>arzidava - 404</title>
    <meta name="description" content="This page does not exist">
</svelte:head>

<Section>
    <Typewriter interval={50} cascade={true} cursor={false} on:done="{_ => done = true}">
        <p>Hmm</p>
        <p>Something is not right...</p>
        <p>.....</p>
        <p>.....</p>
        <p>.....</p>
        <p>Oh I see!</p>
        <p>The colours are a bit off</p>
        <p>Let's see if we can fix that</p>
        <p>............</p>
        <p>Is that better ?</p>
        <p>No ?</p>
        <p>Ok.. you're right, that's even worse</p>
        <p>.....</p>
        <p>Oh that is not the problem ?</p>
        <p>The page you were looking for does not exist ?</p>
        <p>............</p>
        <p>Hmm</p>
        <p>............</p>
        <p>No it does indeed not seem to exist.</p>
        <p>...</p>
        <p>Makes one wonder</p>
        <p>What were you looking for ?</p>
        <p>Was there something supposed to be here ?</p>
        <p>Did something go wrong with a build ?</p>
        <p>Did I screw up ?</p>
        <p>............</p>
        <p>Is this the end ?</p>
    </Typewriter>
    {#if done}
        <Button secondary shadow href="/">Take me away from here</Button>
    {/if}
</Section>
