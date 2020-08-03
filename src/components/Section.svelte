<script>
    export let id;
    export let stack = false;
</script>

<style>
    div {
        background-color: var(--white);
        border: 2px solid var(--black);
        border-radius: .25rem;
        color: var(--black);
        padding: 1rem;
    }
</style>

<div {id} class:stack>
    <slot></slot>
</div>