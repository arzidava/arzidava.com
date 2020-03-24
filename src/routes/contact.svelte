<script>
    import Button from '../components/Button.svelte'
    import TextField from '../components/TextField.svelte'
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

<form name="contact" action="/contacted/" method="POST" data-netlify="true">
    <TextField label="What can I call you ?" name="name" required />
    <TextField label="Where can I reach you ?" name="email" required />
    <TextField label="What is this about ?" name="subject" required />
    <TextField label="Here you write your message" name="body" rows="5" type="textarea" required />
    <div>
        <Button type="submit">Send</Button>
    </div>
</form>