<script>
    export let primary = false;
    export let secondary = false;
</script>

<style>
    section {
        background-color: var(--black);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        text-align: left;
    }

    section.primary {
        background-color: var(--primary-xlight);
        color: var(--black);
    }

    section.secondary {
        background-color: var(--secondary);
        color: var(--black);
    }

    section > :global(h2) {
        font-size: 1.15rem;
        margin-top: 0;
    }

    section > :global(* + *) {
        margin-top: 1rem;
    }
</style>

<section class:primary class:secondary {...$$restProps}>
    <slot></slot>
</section>
