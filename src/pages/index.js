import React from 'react'
import Hero from '../components/image'

import Header from '../components/header'
import Footer from '../components/footer';
import SEO from '../components/seo'
import BeerPreview from '../components/beer-preview';

const IndexPage = ({ data }) => {
  const title = data.allContentfulSiteMetadata.edges[0].node.title;
  return (
  <div>
    <Header />
    <SEO title='Home' />
    <Hero siteTitle={title} headerText={data.allContentfulSiteMetadata.edges[0].node.headerText.headerText}/>
    <div>
      <h1 className='text-center mt-6'>Our selection of craft beer</h1>
      <hr className='border-none h-px bg-gradient-to-r from-white via-gray-600 to-white w-4/5 mx-auto my-4'></hr>
      <ul className='flex justify-center flex-wrap mb-6 w-full'>
        {data.allContentfulBeer.edges.map(({node})=> {
          return (
            <div>
              <li key={node.id}>
                <BeerPreview data={node}/>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
    <Footer />
  </div>
)}

export default IndexPage

export const query = graphql`
query {
  allContentfulSiteMetadata {
    edges {
      node {
        title
        headerText {
          headerText
        }
        logo {
          file {
            url
          }
        }
      }
    }
  }
  allContentfulBeer {
    edges {
      node {
        title
        id
        slug
        image {
          fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        recipe {
          data {
            recipe {
              name
              style {
                name
              }
            }
          }
        }
      }
    }
  }
}
`