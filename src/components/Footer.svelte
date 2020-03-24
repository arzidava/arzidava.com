<script>
    export let segment;
</script>

<style>
    footer {
        background-color: black;
        color: var(--white);
        font-size: 1.25rem;
    }
    footer > span {
        display: block;
        padding: .5em 1em;
    }
    .contact {
        background-color: var(--primary);
        height: 48px;
        text-align: center;
        padding: .5em 1em;
    }
    .contact > a {
        background: var(--white);
        border: 2px solid var(--white);
        border-radius: 1em;
        color: var(--primary);
        display: inline-block;
        padding: .25em 1em;
    }
    .contact > a:after {
        content: '>';
        font-weight: 600;
        margin-left: 1ch;
    }
    a:hover {
        background-color: var(--primary);
        color: var(--white);
    }
    .no-contact {
        background: var(--primary);
        height: 48px;
    }
</style>

<footer>
    {#if segment !== 'contact'}
    <div class="contact">
        <a href="/contact">Contact me</a>
    </div>
    {:else}
    <div class="no-contact"></div>
    {/if}
    <span>&copy; 2020 Stephane Vanraes</span>
</footer>