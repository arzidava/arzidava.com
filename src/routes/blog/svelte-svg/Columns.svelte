<script>
    export let data = []
    $: xwidth = data.length ? 100 / data.length : 100
    $: yratio = data.length ? 100 / Math.max(...data) : 100
</script>

<style>
    rect {
        fill: var(--primary-light);
        stroke: var(--primary);
    }
    text {
        fill: var(--white);
        dominant-baseline: center;
        font-size: 10px;
        text-anchor: middle;
    }
</style>

<svg viewBox="0 0 100 100">
    {#each data as value, i}
        <rect y="{100-(value*yratio)}" width="{xwidth}" x="{i*xwidth}" height="{value*yratio}" />
    {:else}
        <text x="50" y="50">No data provided</text>
    {/each}
</svg>

