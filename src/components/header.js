import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSiteMetadata {
        edges {
          node {
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
  <header className='bg-header-gray'>
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.1rem`,
      }}
      className='flex items-center justify-between p-6'
    >
        
      <div className='max-w-logo flex-row-reverse sm:items-center sm:w-auto'>
        <Link to={`/`}>
          <img src={data.allContentfulSiteMetadata.edges[0].node.logo.file.url} alt='logo'></img>
        </Link>
      </div>
        

      <div className='w-full flex-row-reverse sm:items-center sm:w-auto'>
        <div className='text-sm'>
          <Link
            to={`/about/`}
            className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            About
          </Link>
          <Link
            to={`/contact/`}
            className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            Contact
          </Link>
          <Link
            to={`/beer/`}
            className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            Our Beer
          </Link>
        </div>
      </div>
    </nav>
  </header>
)}

export default Header