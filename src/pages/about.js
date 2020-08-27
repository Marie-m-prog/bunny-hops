import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title='About' />
    <h1>About {data.allContentfulSiteMetadata.edges[0].node.title}</h1>
      <p className='m-8'>
        {data.allContentfulSiteMetadata.edges[0].node.aboutPageText.aboutPageText}
      </p>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    allContentfulSiteMetadata {
      edges {
        node {
          title
          aboutPageText {
            aboutPageText
          }
        }
      }
    }
  }
`
