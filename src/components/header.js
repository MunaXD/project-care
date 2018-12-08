import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({siteTitle}) => (<div>
  <div>
    <div id="topbar" style={{
        marginBottom: '50px'
      }}>
      <div className="ui container fluid">
        <div className="ui large menu inverted blue header">
          <div className="ui container">
            <Link className="item header" to="/">
              {siteTitle}
            </Link>
            <div className="right menu"></div>
            <div className="item">
              <a href="#">Log in or Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
