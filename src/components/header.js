import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({siteTitle}) => (<div>
  <div>
    <div id="topbar" style={{}}>
      <div className="ui container fluid">
        <div className="ui huge menu inverted blue header">
          <div className="ui container">
            <Link className="item header" to="/">
              {siteTitle}
            </Link>
            <div className="right menu"></div>
            <div className="item">
              <Link className="ui huge green button" to="/app/onboarding">Begin Report</Link>
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
