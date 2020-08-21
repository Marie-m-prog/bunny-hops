import React from 'react'
import Hero from '../components/image'

import Header from '../components/header'
import Footer from '../components/footer';
import SEO from '../components/seo'
import BeerPreview from '..components/beer-preview';

const IndexPage = ({ data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <SEO title="Home" />
    <Hero />
    <div>
      <h1 className='text-center mt-6'>Our selection of craft beer</h1>
      <hr className='border-none h-px bg-gradient-to-r from-white via-gray-600 to-white w-4/5 mx-auto my-4'></hr>
      <ul>
        {data.allContentfulBeer.edges.map(({node})=> {
          return (
            <li key={node.id}>
              <BeerPreview data={node}/>
            </li>
          )
        })}
      </ul>
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
        id
        slug
        image {
          fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        recipe {
          data {
            RECIPES {
              RECIPE {
                NAME
                STYLE {
                  NAME
                }
              }
            }
          }
        }
      }
    }
  }
}
`


