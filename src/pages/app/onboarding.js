import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

class Onboarding extends Component {
  constructor() {
    super();
    this.state = {
      convenience: false,
      freely: false,
      owned: false,
      recorder: false
    };
    this.toggleConvenience = this.toggleConvenience.bind(this);
    this.toggleFreely      = this.toggleFreely.bind(this);
    this.toggleOwned       = this.toggleOwned.bind(this);
    this.toggleRecorder    = this.toggleRecorder.bind(this);
  }

  toggleConvenience() {
    this.setState(
      Object.assign( {},
      this.state, {convenience: !this.state.convenience})
    )
  }
  toggleFreely() {
    this.setState(
      Object.assign( {},
      this.state, {freely: !this.state.freely})
    )
  }
  toggleOwned() {
    this.setState(
      Object.assign( {},
      this.state, {owned: !this.state.owned})
    )
  }
  toggleRecorder() {
    this.setState(
      Object.assign( {},
      this.state, {recorder: !this.state.recorder})
    )
  }

  render() {
    const canContinue = this.state.convenience && this.state.freely && this.state.owned && this.state.recorder;

    return (
      <Layout>
        <div className="ui text container" style={{margin: '100px'}}>
          <div style={{marginBottom: '20px'}} className="field">
            <div className="ui checkbox">
              <input type="checkbox" onChange={this.toggleConvenience.bind(this)} checked={this.state.convenience} name="convenience" />
              <label>I understand that this application is only provided as a convenience.</label>
            </div>
          </div>
          <div style={{marginBottom: '20px'}} className="field">
            <div className="ui checkbox">
              <input type="checkbox" onChange={this.toggleFreely.bind(this)} checked={this.state.freely} name="freely" />
              <label>I understand that every report I make will be made of my own initiative and free will.</label>
            </div>
          </div>
          <div style={{marginBottom: '20px'}} className="field">
            <div className="ui checkbox">
              <input type="checkbox" onChange={this.toggleOwned.bind(this)} checked={this.state.owned} name="owned" />
              <label>I understand that every report I make will be made in my own name.</label>
            </div>
          </div>
          <div style={{marginBottom: '20px'}} className="field">
            <div className="ui checkbox">
              <input type="checkbox" onChange={this.toggleRecorder.bind(this)} checked={this.state.recorder} name="recorder" />
              <label>I have installed an audio recorder on my phone, that can run in the background. <br />
              (We recommend the open source <a href="https://play.google.com/store/apps/details?id=com.github.axet.audiorecorder">Audio Recorder</a> by Axet.)</label>
            </div>
          </div>
          <Link className={canContinue ? 'ui right floated primary button' : 'ui right floated primary button disabled'} to="/app/interview">Begin Interview</Link>
        </div>
      </Layout>
    )
  }
}

export default Onboarding
