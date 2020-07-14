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
        padding: 1rem;
    }

    section.primary {
        background-color: var(--primary-light);
    }

    section.secondary {
        background-color: var(--secondary-light);
    }

    section > :global(h2) {
        font-size: 1.15rem;
        margin-top: 0;
    }

    section > :global(* + *) {
        margin-top: 1rem;
    }
</style>

<section class={$$restProps.class} class:primary class:secondary>
    <slot></slot>
</section>
