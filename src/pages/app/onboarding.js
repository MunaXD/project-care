import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const Onboarding = () => (
  <Layout>
    <div className="ui text container">
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>I understand that this application is only provided as a convenience.</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>I understand that every report I make will be made of my own initiative and free will.</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>I understand that every report I make will be made in my own name.</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>I have installed an audio recorder on my phone, that can run in the background. <br />
          (We recommend the open source <a href="https://play.google.com/store/apps/details?id=com.github.axet.audiorecorder">Audio Recorder</a> by Axet.)</label>
        </div>
      </div>
      <Link className="ui primary button" to="/app/interview">Begin Interview</Link>
    </div>
  </Layout>
)

export default Onboarding
