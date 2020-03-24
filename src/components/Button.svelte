<script>
    export let type = "button"
</script>

<style>
    button {
        background: transparent;
        border: 2px solid var(--primary);
        border-radius: .5rem;
        cursor: pointer;
        padding: .5rem 1rem;
    }

    button:hover,
    button:focus {
        background: var(--primary);
        color: white;
        text-decoration: underline;
    }
</style>

<button {type}>
    <slot></slot>
</button>