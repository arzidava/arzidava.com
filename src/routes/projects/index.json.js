import path from 'path'

export async function get({ query }) {
	const projects = import.meta.glob(`./**/*.svx`);
    const limit = parseInt(query.get('limit') || Object.keys(projects).length)

    const posts = (await Promise.all(Object.keys(projects).map(async key => {
        const { metadata } = await projects[key]()
        const slug = path.parse(key).dir.substr(2)
        return {
            ...metadata,
            href: '/projects/' + slug
        }
    }))).sort((a, b) => b.date - a.date)

    return {
        status: 200,
        body: posts.slice(0, limit)
    }
}