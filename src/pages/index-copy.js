import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/image'

import Header from '../components/header'
import Footer from '../components/footer';
import SEO from '../components/seo'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <SEO title="Home" />
    <Hero />
    <h1 className='text-center mt-6'>Our selection of craft beer</h1>
    <hr className='border-none h-px bg-gradient-to-r from-white via-gray-600 to-white w-4/5 mx-auto my-4'></hr>
    <div className='flex justify-center flex-wrap mb-6'>
      {data.allContentfulBeer.edges.map(({node}) => (
        <div key={node.id} className='card max-w-sm rounded overflow-hidden transform hover:scale-105 hover:shadow-lg border-solid border border-gray-300'>
          <Link to={`/beer/${node.slug}`}>
            <Img className='w-full' fluid={node.image.fluid} alt='test'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{node.recipeInfo.RECIPE.NAME}</div>
              <p className='text-gray-700 text-base'>{node.recipeInfo.RECIPE.STYLE.NAME}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
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
          fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
       }
     }
   }
 }
 `
