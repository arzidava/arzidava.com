<script>
    import { createEventDispatcher } from 'svelte'

    export let tags

    const dispatch =createEventDispatcher()

    const selectTag = (tag) => dispatch('select', { tag })
</script>

<style>
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        list-style-type: none;
        margin-right: -1rem;
    }
    button {
        background-color: var(--primary-light);
        border: none;
        cursor: pointer;
        padding: .125rem .25rem;
    }
    button:active,
    button:focus,
    button:hover {
        border: none;
        background-color: var(--secondary-light);
        color: var(--black);
        outline: none;
    }
</style>

<ul>
    {#each tags as tag}
        <li><button on:click="{() => selectTag(tag)}">{tag}</button></li>
    {/each}
</ul>