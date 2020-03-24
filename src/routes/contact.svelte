<script>
    import Button from '../components/Button.svelte'
    import TextField from '../components/TextField.svelte'

    let name
    let email
    let subject
    let body

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = () => {
        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ 
                "form-name": "contact",
                name,
                email,
                subject,
                body
            })
        })
        .then(() => console.log('success'))
        .catch(console.log)
    }
</script>

<style>
    form {
        margin: auto;
        max-width: 80ch;
        padding: 1rem;
    }

    form > :global(* + *) {
        margin-top: 1rem;
    } 
</style>

<form on:submit|preventDefault="{handleSubmit}">
    <TextField label="What can I call you ?" bind:value="{name}" required />
    <TextField label="Where can I reach you ?" bind:value="{email}" required />
    <TextField label="What is this about ?" bind:value="{subject}" required />
    <TextField label="Here you write your message" rows="5" type="textarea" bind:value="{body}" required />
    <div>
        <Button type="submit">Send</Button>
    </div>
</form>