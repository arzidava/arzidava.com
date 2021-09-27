import path from 'path'

export async function get({ query }) {
	const articles = import.meta.glob(`./**/*.svx`);
    const limit = parseInt(query.get('limit') || Object.keys(articles).length)

    const posts = (await Promise.all(Object.keys(articles).map(async key => {
        const { metadata } = await articles[key]()
        const slug = path.parse(key).dir.substr(2)
        return {
            ...metadata,
            href: '/blog/' + slug
        }
    }))).sort((a, b) => b.date - a.date)

    return {
        status: 200,
        body: posts.slice(0, limit)
    }
}