<script>
    import { goto } from '@sapper/app'
    import Button from '../components/Button.svelte'
    import TextField from '../components/TextField.svelte'

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
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
        .then(() => goto('/contacted'))
        .catch(console.log)
    }
</script>

<style>
    form {
        background-color: var(--white);
        border-bottom: 3px solid var(--secondary);
        margin: auto;
        max-width: 80ch;
        padding: 1rem;
    }

    form > :global(* + *) {
        margin-top: 1rem;
    } 
</style>

<form on:submit|preventDefault="{handleSubmit}">
    <TextField label="What can I call you ?" name="name" required />
    <TextField label="Where can I reach you ?" name="email" type="email" required />
    <TextField label="What is this about ?" name="subject" required />
    <TextField label="Here you write your message" name="body" rows="5" type="textarea" required />
    <div>
        <Button type="submit">Send</Button>
    </div>
</form>