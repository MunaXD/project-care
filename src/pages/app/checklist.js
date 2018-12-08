import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../components/layout'

const Checklist = () => (<Layout>
  <div style={{margin: '50px'}}className="ui text container">
    <h1 className="ui header">Checklist</h1>

    <div class="ui form">
      <div class="grouped fields">
        <label for="fruit">1. Did this incident take place within the province of Punjab, Pakistan?</label>
          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
                <label>Yes</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="fruit" tabindex="0" class="hidden"/>
                <label>No</label>
              </div>
            </div>
        </div>
      </div>
      <div class="grouped fields">
        <label for="fruit">2. Did you witness and record evidence of the child begging or performing any actions that would qualify them as a "destitute and neglected child"?</label>
        <div class="inline fields">
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
              <label>Yes</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="fruit" tabindex="0" class="hidden"/>
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
                <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
                <label>Yes</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="fruit" tabindex="0" class="hidden"/>
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
                <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
                <label>Yes</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="fruit" tabindex="0" class="hidden"/>
                <label>No</label>
              </div>
            </div>
        </div>
      </div>
    </div>

    <h2>Based on your answers</h2>
    <div class="ui inverted red segment">
      <div class="ui header">This Child Qualifies for State Protection</div>
      <p>
        <strong>Immediately call 1121</strong> {}
        and report this child to the Child Protection and Welfare Bureau immediately! They can:
        <ol>
          <li>House, clothe, feed, school, and provide medical care for the child</li>
          <li>File for custody of the child</li>
          <li>Prosecute the person exploiting the child</li>
        </ol>
      </p>
    </div>
    <div class="ui inverted orange segment">
      <div class="ui header">You May Still Save More Children</div>
      <p>
        <strong>You have evidence that the person exploiting this child is nearby.</strong> {}
        There may be more children in need of your help!</p>
      <p>Report the person exploiting the children to the police by calling 15 immediately! This is a severe crime and {}
        <em>you</em> {}
        are likely the only one with evidence.</p>
    </div>
    <div class="ui segment">
      <div class="ui header">You Cannot Help This Child Under the PNDC</div>
      <p>Unfortunately, you cannot help this child under the rules of the {}
        <a href="http://punjablaws.gov.pk/laws/472.html">Punjab Destitute and Neglected Children Act 2004</a> {}
        (PNDC), because:</p>
      <ul>
        <li>This incident did not take place in Punjab, Pakistan. The PNDC was enacted by the Punjab Assembly, a body that can only govern Punjab, Pakistan.</li>
        <li>You do not have sufficient evidence that the child qualifies as a "destitute and neglected child".</li>
        <li>This child is too old. The PNDC only protects children under the age of 15.</li>
      </ul>
    </div>
  </div>
</Layout>)

export default Checklist
