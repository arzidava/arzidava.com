<script>
    export let type = 'text'
    export let label
    export let name
    export let required = false
    export let rows = 3
    export let value = ""

    const handleInput = ev => value = ev.currentTarget.value;
</script>

<style>
    label {
        display: block;
    }

    span {
        display: block;
        font-weight: 600;
        padding: .25rem;
    }

    input,
    textarea {
        border: 2px solid var(--primary);
        border-radius: .5rem;
        display: block;
        padding: .25rem .5rem;
        width: 100%;
    }

    textarea {
        resize: vertical;
    }

    input:hover,
    input:focus,
    textarea:hover,
    textarea:focus {
        border-color: var(--secondary);
    }
</style>

<label class:empty="{value.length === 0}">
    <span>{label}</span>
    {#if type === 'textarea'}
    <textarea {name} {required} bind:value {rows}></textarea>
    {:else}
    <input type={type} {name} {required} value="{value}" on:keydown="{handleInput}">
    {/if}
</label>
