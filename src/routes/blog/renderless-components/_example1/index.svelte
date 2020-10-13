<script>
    import { slide } from 'svelte/transition'
    import Accordion from './Accordion.svelte'
</script>

<div class="wrapper">
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Ålesund</button>
        <img transition:slide src="/images/alesund.png" alt="" />
    </Accordion>
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Trollstigen</button>
        <img transition:slide src="/images/trollstigen.png" alt="" />
    </Accordion>
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Jotunheimen</button>
        <img transition:slide src="/images/jotunheimen.png" alt="" />
    </Accordion>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    button {
        margin: 0;
        padding: 1rem;
    }
    img {
        height: 300px;
        width: 400px;
    }
</style>