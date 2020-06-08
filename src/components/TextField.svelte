<script>
    export let label
    export let name
    export let required = false
    export let rows
    export let value
</script>
<style>
    label {
        background-color: var(--white);
        border-radius: .25rem;
        color: var(--black);
        display: block;
        padding: .5rem 1rem;
    }
    span {
        display: block;
    }
    input,
    textarea {
        border-color: transparent transparent var(--primary) transparent;
        border-radius: .25rem;
        border-style: solid;
        border-width: 2px;
        max-width: 40ch;
        padding: .25rem;
        width: 100%;
    }
    input:focus,
    textarea:focus {
        border-color: var(--primary);
        outline: none;
    }
    textarea {
        max-width: 100%;
        resize: vertical;
    }
</style>

<label>
    <span>{label}</span>    
    {#if rows}
        <textarea {rows} {name} {required} bind:value></textarea>
    {:else}
        <input type="text" {name} {required} bind:value>
    {/if}
</label>