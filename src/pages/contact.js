import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data }) => {
  const contactText = JSON.parse(data.allContentfulSiteMetadata.edges[0].node.contactPageText.contactPageText);
  
  return (
  <Layout>
    <SEO title='Contact' />
    <h1 className='mb-8'>Get in touch</h1>
      <p>{contactText.content[0].content[0].value}</p>
      <a className='hover:underline' href='mailto:info@bunnyhops.com'>Contact us on our e-mail</a>
  </Layout>
)}

export default ContactPage

export const query = graphql`
  query {
    allContentfulSiteMetadata {
      edges {
        node {
          title
          contactPageText {
            contactPageText 
          }
        }
      }
    }
  }
`
