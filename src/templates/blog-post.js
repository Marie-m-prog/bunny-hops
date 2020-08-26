import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Img from 'gatsby-image'

const calculateBill = (fermentables, currentFerm) => {
	const total = fermentables.reduce((acc, val) => {
		return acc + parseFloat(val.amount)
	}, 0)		
	return (currentFerm/total*100).toFixed(1);
}

const BlogPost = ({data}) => {
	const {recipe} = data.beer.recipe.data;
	return (
		<Layout>
			<div className='flex'>
				<div className='w-6/12'>
					<Img className='w-full w-1/2 rounded-md' fluid={data.beer.image.fluid} alt='test'/>
				</div>
				<div className='m-8 text-left w-1/2'>
					<h1>{recipe.name}</h1>
					<p>{recipe.style.name}</p>
					<p className='my-8'>{data.beer.description.description}</p>
				</div>
			</div>
			<div>
				<p>Original Gravity: <span>{recipe.og}</span></p>
				<p>Final Gravity: <span>{recipe.fg}</span></p>
				<p>ABV: <span>{`${recipe.est_abv} %`}</span></p>
				<p>SRM: <span>{recipe.est_color}</span></p>
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
								<th className="p-0">°L</th>
								<th className="p-0">Bill %</th>
							</tr>
						</thead>
						<tbody>
							{recipe.fermentables.fermentable.map((td)=> {
								return (
									<tr>
										<td className="border">{`${td.amount} kg`}</td>
										<td className="border">{td.name}</td>
										<td className="border">{td.type}</td>
										<td className="border">{td.color}</td>
										<td className="border">
											{`${calculateBill(recipe.fermentables.fermentable, td.amount)} %`}
										</td>
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
								<th className="p-0">Bill %</th>
							</tr>
						</thead>
						<tbody>
							{recipe.hops.hop.map((hop) => {
								return (
									<tr>
										<td className="border">{`${hop.amount*1000} g`}</td>
										<td className="border">{hop.name}</td>
										<td className="border">{hop.form}</td>
										<td className="border">{hop.use}</td>
										<td className="border">{`${hop.time} min`}</td>
										<td className="border">{`${calculateBill(recipe.hops.hop, hop.amount)} %`}</td>
								</tr>
								)
							})}
						</tbody>
					</table>
					</div>
					<div>
						<h3 className='text-left'>Yeasts</h3>
						<table className="table-auto text-xs">
						<thead>
							<tr>
								<th className="p-0">Amount</th>
								<th className="p-0">Variety</th>
								<th className="p-0">Type</th>
								<th className="p-0">Use</th>
								<th className="p-0">Time</th>
								<th className="p-0">Bill %</th>
							</tr>
						</thead>
						<tbody>
							{recipe.hops.hop.map((hop) => {
								return (
									<tr>
										<td className="border">{`${hop.amount*1000} g`}</td>
										<td className="border">{hop.name}</td>
										<td className="border">{hop.form}</td>
										<td className="border">{hop.use}</td>
										<td className="border">{`${hop.time} min`}</td>
										<td className="border">{`${calculateBill(recipe.hops.hop, hop.amount)} %`}</td>
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

export const pageQuery = graphql`
	query ($slug: String!){
		beer: contentfulBeer(slug: {eq: $slug}) {
			slug
			description {
				description
			}
			recipe {
				data {
					recipe {
						name
						style {
							name
						}
						ibu
						est_abv
						est_color
						og
						fg
						fermentables {
							fermentable {
								name
								amount
								type
								color
							}
						}
						hops {
							hop {
								amount
								form
								name
								time
								use
							}
						}
						yeasts {
							yeast {
								amount
								attenuation
                flocculation
                laboratory
                max_reuse
                max_temperature
                min_temperature
                name
                type
							}
						}
					}
				}

			}
			image {
				fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
					...GatsbyContentfulFluid_tracedSVG
				}
			}
		}
	}
`