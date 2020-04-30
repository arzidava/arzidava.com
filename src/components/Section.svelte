<style>
    div {
        --bubbles-color: var(--white);
        background-image: paint(bubbles);
        background-color: var(--black);
        border: 1px solid var(--white);
        border-radius: .25rem;
        color: var(--white);
        display: flow-root;
        padding: 1rem;
        transition: --bubbles-size 100ms linear;
    }
    div:hover {
        --bubbles-size: 12;
    }

    div > :global(h2) {
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