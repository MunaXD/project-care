import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="ui fluid container">
      <div style={{marginBottom: '50px'}}>
          <Image />
      </div>
    </div>
    <div style={{marginBottom: '50px'}} classNanme="ui container">
      <div className="ui divided centered two column equal height stackable grid">
          <div className="ui five wide column center aligned">
            <div class="ui content">
              <h2 class="ui header"> The Laws Exist</h2>
              <blockquote>
                36/36A "If a person employs a child for begging or causes a child to beg"...or "employs or incites a child to sell goods with the intention of begging"..."he shall be punished with imprisonment for a term which may extend to five years"..."with fine which may extend to one hundred
                thousand rupees"
              </blockquote>

              <blockquote>
                24 "A child protection officer may take into custody a
                destitute and neglected child and produce him along with the complaint before a court within twenty four hours of taking the child into such custody"
              </blockquote>
              <blockquote>
                “‘protection’ means shelter, maintenance, education, healthcare and well-being of a destitute and neglected child…”
              </blockquote>
              <p> — <a href="http://punjablaws.gov.pk/laws/472.html">Punjab Destitute and Neglected Children Act 2004</a></p>
            </div>
          </div>
          <div className="ui five wide column center aligned">
            <div class="ui content">
              <h2 class="ui header"> The Organisation Exists</h2>

                <blockquote>In order to provide care, rehabilitation, education and
                training to the destitute and neglected children, Government of the Punjab established <strong>Child Protection & Welfare Bureau</strong> in March, 2004.
                </blockquote>

                <blockquote>Not only this but a child protection court has also been
                established which addresses the issues like custody and legal reunification of the children with their parents.
                </blockquote>

                <blockquote>
                A child helpline has also been set up which provides guidance, help and coordination for their rescue and protective custody.
                </blockquote>

                <p> — <a href="https://cpwb.punjab.gov.pk">Child Protection & Welfare Bureau</a></p>
            </div>
          </div>
      </div>
    </div>
    <div style={{marginBottom: '50px'}} classNanme="ui center aligned text container">
      <div className="ui inverted center aligned segment">
        <h2 style={{textAlign: 'center'}} classname="ui center aligned header"> You can make a difference</h2>
        <p>
          The next time you see a child beggar on the street, report them to the authorities. <br />
        <em>This app will guide you through interviewing the child and compiling the evidence to formally report a child to the Child Protection & Welfare Bureau.</em>
        </p>
        <Link className="ui huge green button" to="/app/onboarding">Begin Report</Link>
      </div>
    </div>

  </Layout>
)

export default IndexPage
