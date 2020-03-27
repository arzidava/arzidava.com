<script>
    import Header from '../components/Header.svelte'
    export let segment

    $: {
        if (process.browser) {
            console.log(segment);
            if (segment && document.body.classList.contains('home')) {
                document.body.classList.remove('home')
            } else if (!segment) {
                document.body.classList.add('home')
            }
        }
    }

</script>

{#if segment}
    <Header {segment} />
{/if}

<main>
    <slot></slot>
</main>
