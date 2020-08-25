import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='bg-header-gray'>
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.1rem`,
      }}
      className='flex items-center justify-between flex-wrap p-6'
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className='w-full flex-row-reverse lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link
            to={`/about/`}
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            About
          </Link>
          <Link
            to={`/contact/`}
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            Contact
          </Link>
          <Link
            to={`/beer/`}
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4'
          >
            Our Beer
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
