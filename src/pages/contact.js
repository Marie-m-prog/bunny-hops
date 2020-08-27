import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <h1 className='mb-8'>Get in touch</h1>
      <p>Interested in our beer, and want to get in touch?</p> 
      <a className='hover:underline' href='mailto:almroth.ulrik@gmail.com'>Contact us on our e-mail</a>
  </Layout>
)

export default ContactPage