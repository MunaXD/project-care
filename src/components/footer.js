import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({siteTitle}) => (
    <div class="ui center aligned text container">
      <div class="ui footer basic segment">
          <p>
            Project C.A.R.E was created by team <strong>Kernel Panic</strong> in 28
            hours for the <a href="https://2018isbhacks.devpost.com">Jazz SDG Hackathon 2018</a>.
          </p>
          <p>

          © All content is copyright <a href="https://amin.gilani.me">Amin Gilani</a>, <a href="https://www.linkedin.com/in/mohsulaimankhan/">Sulaiman Khan</a>, and <a href="https://www.linkedin.com/in/izzashahid-gilani/">Izza Gilani</a>, 2018. <br />

          All original content imagery is released under a Creative Commons Attribution-NonCommercial 4.0 International License. <br />
          All code is released under the AGPL v3.
          </p>
      </div>
    </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ''
}

export default Footer
