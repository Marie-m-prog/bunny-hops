import React from 'react'
import BeerPreview from '../components/beer-preview'
import Header from '../components/header'
import Footer from '../components/footer';

const BeerList = ({data}) => (
    <div className='min-h-screen'>
      <Header siteTitle={data.site.siteMetadata.title} />
        <h1 className='text-center mt-6'>Our selection of craft beer</h1>
        <hr className='border-none h-px bg-gradient-to-r from-white via-gray-600 to-white w-4/5 mx-auto my-4'></hr>
        <ul className='flex justify-center flex-wrap mb-6'>
          {data.allContentfulBeer.edges.map(({node})=> {
            return (
              <li key={node.id}>
                <BeerPreview data={node}/>
              </li>
            )
          })}
        </ul>
      <Footer />
    </div>
)

export default BeerList

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
        title
        id
        slug
        image {
          fluid(maxWidth: 350, maxHeight: 400, resizingBehavior: FILL) {
            ...GatsbyContentfulFluid
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

