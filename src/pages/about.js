import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're a local Swedish brewery from Stockholm. Try out our crafted beers named after traditional Swedish proverbs and invented words. 
      </p>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
