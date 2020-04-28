<script>
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
</script>

<style>
    .contacted,
    form {        
        background-color: var(--black);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        flex: 1 0 calc(275px);
        margin: 1rem .5rem 0;
        padding: 1rem;
    }

    .contacted {
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    div {
        text-align: right;
    }
</style>

<h1>contact me</h1>
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