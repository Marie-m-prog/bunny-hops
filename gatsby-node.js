const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return  graphql(`
		{
			allContentfulBeer {
				edges {
					node {
						slug
					}
				}
			}
		}      
`).then((result) => {
		if(result.errors) {
			console.log('Error with data from contentful', result.errors)
		}
		const beerTemplate = path.resolve('./src/templates/blog-post.js')

		result.data.allContentfulBeer.edges.forEach(edge => {
			createPage({
				path: `/beer/${edge.node.slug}/`,
				component: slash(beerTemplate),
				context: {
					slug: edge.node.slug
				}
			})
		});
}).catch(error => console.log('Error with data from contentful', error))
}