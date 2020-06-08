import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

function isDir(path) {
	try {
		var stat = fs.lstatSync(path)
		return stat.isDirectory()
	} catch (e) { return false }
	// lstatSync throws an error if path doesn't exist
}

const route = 'src/routes/blog'
const posts = fs.readdirSync(route)
	.filter(file => isDir(`${route}/${file}`))
	.map(file => {
		const post = fs.readFileSync(path.resolve(route, `${file}/index.svx`), 'utf-8')
		return {...grayMatter(post).data, slug: file}
	})
	.sort((a, b) => (a.data > b.date) ? 1 : -1)

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		date: post.date,
		tags: (post.tags || "").split(" ")
	}
}))

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(contents)
}