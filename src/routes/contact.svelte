<script>
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

    label {
        background-color: var(--white);
        border-radius: .25rem;
        color: var(--black);
        display: block;
        padding: .5rem 1rem;
    }
    label > span {
        display: block;
    }
    label > input,
    label > textarea {
        border-color: transparent transparent var(--primary) transparent;
        border-radius: .25rem;
        border-style: solid;
        border-width: 2px;
        max-width: 40ch;
        padding: .25rem;
        width: 100%;
    }
    label > input:focus,
    label > textarea:focus {
        border-color: var(--primary);
        outline: none;
    }
    label > textarea {
        resize: vertical;
    }
    div {
        text-align: right;
    }
    button {        
        background-color: var(--primary);
        border: 0;
        color: var(--white);
        display: inline-block;
        outline: none;
        padding: .5rem 1rem;
    }
    button:focus,
    button:hover {        
        background-color: var(--secondary);
    }
</style>

<h1>contact me</h1>
{#if !msgSend}
    <form class="stack" on:submit|preventDefault="{handleSubmit}">
        <label>
            <span>Name</span>
            <input type="text" name="name" required>
        </label>
        <label>
            <span>Email</span>
            <input type="text" name="email" required>
        </label>
        <label>
            <span>Subject</span>
            <input type="text" name="subject" required>
        </label>
        <label>
            <span>Your message</span>
            <textarea name="body" required rows="5"></textarea>
        </label>
        <div>
            <button type="submit">Send</button>
        </div>
    </form>
{:else}
    <div class="contacted">
        <h2>Thank you</h2>
    </div>
{/if}