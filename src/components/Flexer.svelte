<script>
    export let margin
    export let size

    $: style = (margin ? `--margin: ${margin};` : '') + (size ? `--size: ${size}` : '')
</script>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    div > :global(*) {
        flex: 1 0 var(--size, auto);        
        margin: var(--margin, 0)
    }
</style>

<div {style}>
    <slot></slot>
</div>
