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
            <a href="https://github.com/amingilani/project-care"><i className="github icon"></i> Code on Github</a> | <a href="https://devpost.com/software/project-care"><i className="code icon"></i> DevPost Submission</a>
          </p>
          <p>
          © All content is copyright <a href="https://amin.gilani.me">Amin Gilani</a>, <a href="https://www.linkedin.com/in/mohsulaimankhan/">Sulaiman Khan</a>, and <a href="https://www.linkedin.com/in/izzashahid-gilani/">Izza Gilani</a>, 2018.
          </p>
          <p>
          All original content and imagery is released under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0.</a> <br />
          All code is released under the <a href="https://www.gnu.org/licenses/agpl.txt">AGPL v3</a>.
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
