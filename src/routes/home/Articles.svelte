<script>
    import ArticleList from '../../components/ArticleList.svelte'
    import Section from '../../components/Section.svelte'
    export let posts = []
</script>

<style>

</style>

<Section>
    <h2>Latest Articles</h2>
    <ArticleList {posts} />
</Section>