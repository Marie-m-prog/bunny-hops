import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
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
      <Link
        to={`/about/`}
        style={{
          float: `right`,
          color: `white`,
          textDecoration: `none`,
        }}
      >
        About
      </Link>
      <Link
        to={`/contact/`}
        style={{
          float: `right`,
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Contact
      </Link>
      <Link
        to={`/beer/`}
        style={{
          float: `right`,
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Our Beer
      </Link>
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
