<script>
    import Footer from '../components/Footer.svelte'
    import Header from '../components/Header.svelte'
    export let segment

    $: {
        if (process.browser) {
            if (segment && document.body.classList.contains('home')) {
                document.body.classList.remove('home')
            } else if (!segment) {
                document.body.classList.add('home')
            }
        }
    }

</script>

<Header {segment} />

<main>
    <slot></slot>
</main>

<Footer {segment} />
