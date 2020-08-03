<script>
    export let href;
    export let inline = false;
    export let type = 'button';
    export let secondary = false;
    export let shadow = false;
</script>

<style>
    a,
    button {
        background-color: var(--secondary-light);
        border: 0;
        color: var(--black);
        cursor: pointer;
        display: block;
        font-size: 1.125rem;
        outline: none;
        padding: .5rem 1rem;
        text-align: center;
    }

    a.inline,
    button.inline {
        display: inline-block;
    }

    a:active,
    a:focus,
    a:hover,
    button:active,
    button:focus,
    button:hover {
        background-color: var(--primary-xlight);
    }
    
    a.secondary,
    button.secondary {
        background-color: var(--primary-xlight);
    }
    a.secondary:active,
    a.secondary:focus,
    a.secondary:hover,
    button.secondary:active,
    button.secondary:focus,
    button.secondary:hover {
        background-color: var(--secondary-light);
    }
</style>

{#if href}
    <a class:secondary class:inline class:shadow {href} on:click {...$$restProps}>
        <slot></slot>
    </a>
{:else}
    <button class:secondary class:inline class:shadow {type} on:click {...$$restProps}>
        <slot></slot>
    </button>
{/if}
