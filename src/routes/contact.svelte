<script>    
    import { onMount } from 'svelte'
    import { background, colours, pagetitle } from '../stores.js'
    import Button from '../components/Button.svelte'
    import TextField from '../components/TextField.svelte'

    let msgSend = false

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }
    const handleSubmit = ev => {
        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                name: ev.target.elements.name.value,
                email: ev.target.elements.email.value,
                subject: ev.target.elements.subject.value,
                body: ev.target.elements.body.value
            })
        })
        .then(() => msgSend = true)
        .catch(console.log)
    }
    
    onMount(() => {
        background.set($colours.secondary)
        pagetitle.set('contact')
    });
</script>

<svelte:head>
    <title>arzidava - contact</title>
    <meta name="description" content="The contact page for arzidava.com">
</svelte:head>

<style>
    .contacted,
    form {
        background-color: var(--black);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        flex: 1 0 calc(275px);
        margin: 1rem;
        padding: 1rem;
    }

    .contacted {
        background-color: var(--black);
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    div {
        display: flex;
        justify-content: flex-end;
    }
</style>

{#if !msgSend}
    <form class="stack" on:submit|preventDefault="{handleSubmit}">
        <TextField label="Name" name="name" required />
        <TextField label="Email" name="email" required />
        <TextField label="Subject" name="subject" required />
        <TextField label="Your message" name="body" rows="5" required />
        <div>
            <Button type="submit">Send</Button>
        </div>
    </form>
{:else}
    <div class="contacted">
        <h2>Thank you</h2>
    </div>
{/if}