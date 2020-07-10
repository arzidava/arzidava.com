<style>
    div {
        background-color: var(--black);
        color: var(--white);
        display: flow-root;
        padding: 1rem;
    }
    div > :global(h2) {
        font-size: 1.15rem;
        margin-top: 0;
    }

    div > :global(* + *) {
        margin-top: 1rem;
    }
</style>

<section>
    <div>
        <slot></slot>
    </div>
</section>