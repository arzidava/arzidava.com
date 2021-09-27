import path from 'path'

export async function get({ query }) {
	const snippets = import.meta.glob(`./**/*.svx`);
    const limit = parseInt(query.get('limit') || Object.keys(snippets).length)

    const posts = (await Promise.all(Object.keys(snippets).map(async key => {
        const { metadata } = await snippets[key]()
        const slug = path.parse(key).dir.substr(2)
        return {
            ...metadata,
            href: '/code/' + slug
        }
    }))).sort((a, b) => b.date - a.date)

    return {
        status: 200,
        body: posts.slice(0, limit)
    }
}