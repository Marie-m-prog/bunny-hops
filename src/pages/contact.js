import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Get in touch</h1>
      <p>Interested in our beer, and want to get in touch?</p> 
      <p>Contact us on mail <a href='bunnyhops@hops.se'>bunnyhops@hops.se</a></p>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`