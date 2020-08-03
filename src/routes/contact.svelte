<script>
	import { backdropColour, pagetitle } from '../store.js'
	import Button from '../components/Button.svelte'
	import Section from '../components/Section.svelte'
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
	
	backdropColour.set('grey')
	pagetitle.set('contact')
</script>

<svelte:head>
    <title>arzidava - contact</title>
    <meta name="description" content="The contact page for arzidava.com">
</svelte:head>

<style>
    form {
        flex: 1 0 calc(275px);
        padding: 1rem;
	}
	:global(#contacted) {
		margin: auto;
		padding: 2rem;
		text-align: center;
		width: 25ch;
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
            <Button type="submit" shadow>Send</Button>
        </div>
    </form>
{:else}
	<Section id="contacted">
		<h2>Thank you</h2>
	</Section>
{/if}