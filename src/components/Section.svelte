<style>
    section {
        background-color: var(--grey);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        padding: 1rem;
    }
    section > :global(h2) {
        font-size: 1.15rem;
        margin-top: 0;
    }

    section > :global(* + *) {
        margin-top: 1rem;
    }
</style>

<section class={$$restProps.class}>
    <slot></slot>
</section>
