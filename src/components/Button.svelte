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
        background-color: var(--primary);
        border: 0;
        color: var(--white);
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

    a.shadow,
    button.shadow {        
        box-shadow: 4px 4px 4px rgba(0,0,0,.75);
    }

    a:active,
    a:focus,
    a:hover,
    button:active,
    button:focus,
    button:hover {
        background-color: var(--secondary);
    }
    
    a.secondary,
    button.secondary {
        background-color: var(--secondary-light);
        color: var(--white);
    }
    a.secondary:active,
    a.secondary:focus,
    a.secondary:hover,
    button.secondary:active,
    button.secondary:focus,
    button.secondary:hover {
        background-color: var(--primary);
    }
</style>

{#if href}
    <a class:secondary class:inline class:shadow {href} on:click>
        <slot></slot>
    </a>
{:else}
    <button class:secondary class:inline class:shadow {type} on:click>
        <slot></slot>
    </button>
{/if}
