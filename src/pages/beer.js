import React from "react"
import BeerPreview from '../components/beer-preview'
import Layout from "../components/layout"

const BeerList = ({data}) => (
  <Layout>
    <div>
        <h1 className='text-center'>Our selection of craft beer</h1>
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
      </div>
    </Layout>
)

export default BeerList

export const query = graphql`
query {
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

