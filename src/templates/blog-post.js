import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Img from 'gatsby-image'

const BlogPost = ({data}) => {
	const {RECIPE} = data.beer.recipe.data.RECIPES;
	console.log(RECIPE.FERMENTABLES)
	return (
		<Layout>
			<div className='flex'>
				<div className='w-6/12'>
					<Img className='w-full w-1/2 rounded-md' fluid={data.beer.image.fluid} alt='test'/>
				</div>
				<div className='m-8 text-left w-1/2'>
					<h1>{RECIPE.NAME}</h1>
					<p>{RECIPE.STYLE.NAME}</p>
					<p>{`ABV ${RECIPE.EST_ABV}%`}</p>
					<p className='my-8'>{data.beer.description.description}</p>
				</div>
			</div>
			<h1 className='my-8 text-left'>Brewing details</h1>
			<div>
				<div>
					<h3 className='text-left'>Fermentables</h3>
					<table className="w-2/3 table-auto text-xs">
						<thead>
							<tr>
								<th className="p-0">Amount</th>
								<th className="p-0">Fermentable</th>
								<th className="p-0">Type</th>
								<th className="p-0">Yield</th>
							</tr>
						</thead>
						<tbody>
							{RECIPE.FERMENTABLES.FERMENTABLE.map((td)=> {
								return (
									<tr>
										<td className="border">{`${td.AMOUNT} kg`}</td>
										<td className="border">{td.NAME}</td>
										<td className="border">{td.TYPE}</td>
										<td className="border">{td.YIELD}</td>
								</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div>
					<div>
						<h3 className='text-left'>Hops</h3>
						<table className="table-auto text-xs">
						<thead>
							<tr>
								<th className="p-0">Amount</th>
								<th className="p-0">Variety</th>
								<th className="p-0">Type</th>
								<th className="p-0">Use</th>
								<th className="p-0">Time</th>
							</tr>
						</thead>
						<tbody>
							{RECIPE.HOPS.HOP.map((hop) => {
								return (
									<tr>
										<td className="border">{`${hop.AMOUNT} g`}</td>
										<td className="border">{hop.NAME}</td>
										<td className="border">{hop.FORM}</td>
										<td className="border">{hop.USE}</td>
										<td className="border">{`${hop.TIME} min`}</td>
								</tr>
								)
							})}
						</tbody>
					</table>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default BlogPost

// export const pageQuery = graphql`
// 	query ($slug: String!){
// 		beer: contentfulBeer(slug: {eq: $slug}) {
// 			slug
// 			description {
// 				description
// 			}
// 			recipe {
// 				data {
// 					RECIPES {
// 						RECIPE {
// 							NAME
// 							STYLE {
// 								NAME
// 							}
// 							EST_ABV
// 							FERMENTABLES {
// 								FERMENTABLE {
// 									NAME
// 									AMOUNT
// 									TYPE
// 									YIELD
// 								}
// 							}
// 							HOPS {
// 								HOP {
// 									AMOUNT
// 									FORM
// 									NAME
// 									TIME
// 									USE
// 								}
// 							}
// 						}
// 					}
// 				}

// 			}
// 			image {
// 				fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
// 					...GatsbyContentfulFluid_tracedSVG
// 				}
// 			}
// 		}
// 	}
// `