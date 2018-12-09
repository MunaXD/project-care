// READ THIS FIRST
// READ THIS FIRST
// READ THIS FIRST
// READ THIS FIRST
// I haven't refactored shit in this page because this is a Hackathon
// before you do anything serious, please, for the love of God refactor the
// report into it's own component

import React, { Component } from 'react'

import Layout from '../../components/layout'

class Checklist extends Component {
  constructor() {
    super()
    this.state = {
      punjab: null,
      destitute: null,
      underage: null,
      nearby: null,
    }

    this.handlePunjabChange = this.handlePunjabChange.bind(this)
    this.handleDestituteChange = this.handleDestituteChange.bind(this)
    this.handleUnderageChange = this.handleUnderageChange.bind(this)
    this.handleNearbyChange = this.handleNearbyChange.bind(this)
  }

  handlePunjabChange (e) {
          console.log(e);
    this.setState(
      Object.assign( {},
      this.state, {punjab: e.currentTarget.value}))
  }

  handleDestituteChange (e) {
          console.log(e);
    this.setState(
      Object.assign( {},
      this.state, {destitute: e.currentTarget.value}))
  }

  handleUnderageChange (e) {
          console.log(e);
    this.setState(
      Object.assign( {},
      this.state, {underage: e.currentTarget.value}))
  }

  handleNearbyChange (e) {
          console.log(e);
    this.setState(
      Object.assign( {},
      this.state, {nearby: e.currentTarget.value}))
  }


  render() {
    const allAnswered = this.state.punjab && this.state.destitute && this.state.underage && this.state.nearby
    const validCase = this.state.punjab === 'yes' && this.state.destitute === 'yes' && this.state.underage === 'yes'

    let nearbyPartial;

    if (this.state.nearby === 'yes') {
      nearbyPartial = (
        <div class="ui inverted orange segment">
          <div class="ui header">You May Still Save More Children</div>
          <p>
            <strong>You have evidence that the person exploiting this child is nearby.</strong> {}
            There may be more children in need of your help!</p>
          <p>Report the person exploiting the children to the police by calling 15 immediately! This is a severe crime and {}
            <em>you</em> {}
            are likely the only one with evidence.</p>
        </div>
      );
    }


    let report;

    if (allAnswered) {
      if (validCase) {

        report = (
          <div>
            <h2>Based on your answers</h2>

              <div class="ui inverted red segment">
                <div class="ui header">This Child Qualifies for State Protection</div>
                <p>
                  <strong>Immediately call 1121</strong> {}
                  and report this child to the Child Protection and Welfare Bureau immediately! They can:
                </p>
                <ol>
                  <li>House, clothe, feed, school, and provide medical care for the child</li>
                  <li>File for custody of the child</li>
                  <li>Prosecute the person exploiting the child</li>
                </ol>
              </div>

              {nearbyPartial}

          </div>
        )
      } else {

        report = (
          <div class="ui segment">
            <div class="ui header">This Child Does Not Qualify for Help Under the PNDC</div>
            <p>Unfortunately, you cannot help this child under the rules of the {}
              <a href="http://punjablaws.gov.pk/laws/472.html">Punjab Destitute and Neglected Children Act 2004</a> {}
              (PNDC), because of one of the following:</p>
            <ul>
              <li>This incident did not take place in Punjab, Pakistan. The PNDC was enacted by the Punjab Assembly, a body that can only govern Punjab, Pakistan.</li>
              <li>You do not have sufficient evidence that the child qualifies as a "destitute and neglected child".</li>
              <li>This child is too old. The PNDC only protects children under the age of 15.</li>
            </ul>
          </div>
        )

      }
    } else {
      report = (<h2>Please answer all questions for a report</h2>);
    }
  return (
    <Layout>
    <div style={{margin: '50px'}}className="ui text container">
      <h1 className="ui header">Checklist</h1>

      <div class="ui form">
        <div class="grouped fields">
          <label for="fruit">1. Did this incident take place within the province of Punjab, Pakistan?</label>
            <div class="inline fields">
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="yes" checked={this.state.punjab === 'yes'} onChange={this.handlePunjabChange} />
                  <label>Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="no" checked={this.state.punjab === 'no'} onChange={this.handlePunjabChange} />
                  <label>No</label>
                </div>
              </div>
          </div>
        </div>
        <div class="grouped fields">
          <label for="fruit">2. Did you witness and record evidence of the child begging or anything that would qualify them as a "destitute and neglected child" as per the PNDC?</label>
            <div class="inline fields">
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="yes" checked={this.state.destitute === 'yes'} onChange={this.handleDestituteChange} />
                  <label>Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="no" checked={this.state.destitute === 'no'} onChange={this.handleDestituteChange} />
                  <label>No</label>
                </div>
              </div>
          </div>
        </div>
        <div class="grouped fields">
          <label for="fruit">3. Did you witness and record the child's age as below 15 years?</label>
            <div class="inline fields">
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="yes" checked={this.state.underage === 'yes'} onChange={this.handleUnderageChange} />
                  <label>Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="no" checked={this.state.underage === 'no'} onChange={this.handleUnderageChange} />
                  <label>No</label>
                </div>
              </div>
          </div>
        </div>
        <div class="grouped fields">
          <label for="fruit">4. Do you have evidence that the person exploiting the child is nearby?</label>
            <div class="inline fields">
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="yes" checked={this.state.nearby === 'yes'} onChange={this.handleNearbyChange} />
                  <label>Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" value="no" checked={this.state.nearby === 'no'} onChange={this.handleNearbyChange} />
                  <label>No</label>
                </div>
              </div>
          </div>
        </div>
      </div>
      {report}
    </div>
  </Layout>
    )
  }
}

export default Checklist
