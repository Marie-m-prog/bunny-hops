import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data }) => {
  const contactText = JSON.parse(data.allContentfulSiteMetadata.edges[0].node.contactPageText.contactPageText);

  return (
  <Layout>
    <SEO title='Contact' />
    <div>
      <h1 className='mb-8'>Get in touch</h1>
      <p>{contactText.content[0].content[0].value}</p>
      <p>Contact us on our <a className='hover:underline' href='mailto:info@bunnyhops.com'>e-mail</a>, or in the form below:</p>
    </div>
    <div className="contact-form my-8">
        <form name="contact" method="POST" data-netlify="true" autoComplete="off" action="/thank-you">
          <input type="hidden" name="form-name" value="contact"/>
          <p>
            <input type="text" name="name" placeholder="Name" className="w-2/3 m-1 p-1" required/>
          </p>
          <p>
            <input type="email" name="email" placeholder="Email Address" className="w-2/3 m-1 p-1" required/>
          </p>
          <p>
            <textarea name="message" placeholder="Message" className="w-2/3 m-1 p-1 h-40" required></textarea>
          </p>
            <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded">Send</button>
        </form>
      </div>
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
