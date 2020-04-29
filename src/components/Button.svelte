<script>
    export let href;
    export let type = 'button';
    export let secondary = false;
    export let shadow = false;
</script>

<style>
    a,
    button {
        background-color: var(--primary);
        border: 0;
        color: var(--white);
        cursor: pointer;
        display: block;
        font-size: 1.125rem;
        outline: none;
        padding: .5rem 1rem;
    }

    a.shadow,
    button.shadow {        
        box-shadow: 4px 4px 4px rgba(0,0,0,.75);
    }

    a.secondary,
    button.secondary {
        background-color: var(--secondary);
        color: var(--xblack);
    }

    a:active,
    a:focus,
    a:hover,
    button:active,
    button:focus,
    button:hover {
        background-color: var(--secondary);
    }
</style>

{#if href}
    <a class:secondary class:shadow {href} on:click>
        <slot></slot>
    </a>
{:else}
    <button class:secondary class:shadow {type} on:click>
        <slot></slot>
    </button>
{/if}
