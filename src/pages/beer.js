import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BeerList = ({ data }) => (
  <Layout>
    <h1>Our selection of craft beer</h1>
  </Layout>
)

export default BeerList

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`