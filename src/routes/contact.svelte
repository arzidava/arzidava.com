<script>
    import Button from '../components/Button.svelte'
    import TextField from '../components/TextField.svelte'

    let name;
    let email;
    let subject;
    let body;

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
            "form-name": "contact",
            "name": name,
            "email": email,
            "subject": subject,
            "body": body
        })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

    };
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

<form>
    <TextField label="What can I call you ?" name="name" required bind:value="{name}" />
    <TextField label="Where can I reach you ?" name="email" required bind:value="{email}" />
    <TextField label="What is this about ?" name="subject" required bind:value="{subject}" />
    <TextField label="Here you write your message" name="body" rows="5" type="textarea" required bind:value="{body}" />
    <div>
        <Button type="submit">Send</Button>
    </div>
</form>