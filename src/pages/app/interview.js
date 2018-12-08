import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../components/layout'

const Interview = () => (<Layout>
  <div style={{margin: '50px'}} className="ui text container">
    <h1 className="ui header">Interview</h1>
    <p>
      <strong>Important!</strong> {}
      Before you begin:</p>
    <ol>
      <li>You may leave this app at any time and come back,</li>
      <li>You
        <strong> must </strong>
        record pictures of a video of the child in the act of begging,</li>
      <li>You
        <strong> must </strong>
        record your conversation with the child.</li>
    </ol>
    <p><i class="lightbulb icon"></i>Building a rapport will help the child open up faster. Never give the child money, but instead:</p>
    <ul>
      <li>Offer them food</li>
      <li>Tell them your name</li>
      <li>Smile often, and make them laugh</li>
      <li>Get them to talk at least as much as you</li>
    </ul>

    <h2>Questions to qualify the child for State protection</h2>

    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              child’s name
            </strong>
          </div>
          <div class="meta">
            This helps you identify the child himself
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              child’s age
            </strong>
          </div>
          <div class="meta">
            The law only protects children under 15 years of age
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              child’s place of residence
            </strong>
          </div>
          <div class="meta">
            This information may be of use to the authorities
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
    </div>

    <h2>Questions to find the person exploiting the child</h2>

    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              reason for the child’s begging
            </strong>
          </div>
          <div class="meta">
            This information may be of use to the authorities
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              name of the person making the child beg
            </strong>
          </div>
          <div class="meta">
            This information may be of use to the authorities
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine the {}
            <strong>
              the relationship of the child with the person making the child beg
            </strong>
          </div>
          <div class="meta">
            This information may be of use to the authorities
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
    </div>

    <h2>Questions to determine if the child is in immediate danger</h2>

    <div class="ui cards">

      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine whether the child has ever {}
            <strong>
              been beaten or hit while being forced to beg
            </strong>
          </div>
          <div class="meta">
            This information may be of <strong>critical</strong> importance to the authorities.
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <div class="subtitle">
            Determine whether the child has ever {}
            <strong>
               come in contact with alcohol or narcotics
            </strong>
          </div>
          <div class="meta">
            This information may be of <strong>critical</strong> importance to the authorities.
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Obtained</div>
            <div class="ui basic red button">Skip</div>
          </div>
        </div>
      </div>
    </div>
    <Link style={{marginTop: '50px'}} className="ui blue floated right button" to="/app/checklist">Finish Interview</Link>
  </div>
</Layout>)

export default Interview
