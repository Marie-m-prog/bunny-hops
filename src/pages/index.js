import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <h1>Our selection of craft beer</h1>
    <div className='index-page'>
      
      {data.allContentfulBeer.edges.map(({node}) => (
        <div key={node.id} className='card max-w-sm rounded overflow-hidden shadow-lg'>
          <Link to={`/beer/${node.slug}`}>
            <img className='w-full' src={node.image.file.url} alt='test'></img>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{node.recipeInfo.RECIPE.NAME}</div>
              <p className='text-gray-700 text-base'>{node.recipeInfo.RECIPE.STYLE.NAME}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
   allContentfulBeer {
     edges {
       node {
         batchSize
         fermentables
         id
         slug
         recipeInfo {
          RECIPE {
            NAME
            BATCH_SIZE
            STYLE {
              NAME
            }
          }
        }
        image {
          file {
            url
          }
        }
       }
     }
   }
 }
 `
