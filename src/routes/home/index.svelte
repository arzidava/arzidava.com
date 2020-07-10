<script>
    import About from './About.svelte'
    import Articles from './Articles.svelte'
    import Header from '../../components/Header.svelte'

    export let posts;
</script>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    div > :global(*) {
        flex: 1 0 calc(275px);
        margin: 1rem .5rem 0;
    }
</style>

<svelte:head>
    <title>arzidava</title>
    <meta name="description" content="The personal website of Stephane Vanraes, with articles on frontend development subjects.">
</svelte:head>

<Header>arzidava (staging)</Header>

<div>
    <About />
    <Articles {posts} />
</div>
