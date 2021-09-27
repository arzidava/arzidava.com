<script>
	import { closeModalV2 } from 'renderless-svelte';
	import StyledModal from '$lib/components/StyledModal.svelte';
	import Button from '$lib/components/Button.svelte';
	import TextField from '$lib/components/TextField.svelte';

	const encode = (data) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};
	const handleSubmit = (ev) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				name: ev.target.elements.name.value,
				email: ev.target.elements.email.value,
				subject: ev.target.elements.subject.value,
				body: ev.target.elements.body.value
			})
		}).then(closeModalV2);
	};
</script>

<StyledModal>
	<form on:submit|preventDefault={handleSubmit}>
		<TextField label="Name" name="name" required />
		<TextField label="Email" name="email" required />
		<TextField label="Subject" name="subject" required />
		<TextField label="Your message" name="body" rows="5" required />
		<Button type="submit">Send</Button>
	</form>
</StyledModal>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		width: 60ch;
	}
	form > :global(button) {
		margin-inline-start: auto;
		max-width: 20ch;
		width: 100%;
	}
</style>
