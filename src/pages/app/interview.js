import React, {Component} from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import _ from 'lodash';


const Card = (props) => (
  <div class="card">
    <div class="content">
      <div class="subtitle">
        {props.preText}
        <strong>
          {props.postText}
        </strong>
      </div>
      <div class="meta">
        {props.description}
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <button href="#" onClick={()=>{props.clickHandler(props.postText, 'obtained')}} class="ui basic green button">Obtained</button>
        <button href="#" onClick={()=>{props.clickHandler(props.postText, 'skipped')}} class="ui basic red button">Skip</button>
      </div>
    </div>
  </div>
)

const CardSection = (props) => {
  const cards =  props.questions.map((each)=>(
    <Card
      preText={each.preText}
      postText={each.postText}
      description={each.description}
      clickHandler={props.clickHandler}
      />)
    )
  return (
  <div>
  <h2>{props.title}</h2>
  <div class="ui cards">
    {cards}
  </div>
  </div>
)}

class Interview extends Component {

constructor() {
  super()
  this.state = {
    questions: [
      {
        preText: 'Determine the ',
        postText: 'child’s name',
        category: 'Questions to qualify the child for State protection',
        description: 'This helps you identify the child himself',
        answer: null,
      },
      {
        preText: 'Determine the ',
        postText: 'child’s age',
        category: 'Questions to qualify the child for State protection',
        description: 'The law only protects children under 15 years of age',
        answer: null,
      },
      {
        preText: 'Determine the ',
        postText: 'child’s place of residence',
        category: 'Questions to qualify the child for State protection',
        description: 'This information may be of use to the authorities',
        answer: null,
      },
      {
        preText: 'Determine the ',
        postText: 'reason for the child’s begging',
        category: 'Questions to find the person exploiting the child',
        description: 'This information may be of use to the authorities',
        answer: null,
      },
      {
        preText: 'Determine the ',
        postText: 'name of the person making the child beg',
        category: 'Questions to find the person exploiting the child',
        description: 'This information may be of use to the authorities',
        answer: null,
      },
      {
        preText: 'Determine the ',
        postText: 'relationship of the child with the person making the child beg',
        category: 'Questions to find the person exploiting the child',
        description: 'This information may be of use to the authorities',
        answer: null,
      },
      {
        preText: 'Determine whether the child has ever ',
        postText: 'been physically beaten',
        category: 'Questions to determine if the child is in immediate danger',
        description: 'This information may be of critical importance to the authorities.',
        answer: null,
      },
      {
        preText: 'Determine whether the child has ever ',
        postText: 'come in contact with alcohol or narcotics',
        category: 'Questions to determine if the child is in immediate danger',
        description: 'This information may be of critical importance to the authorities.',
        answer: null,
      }

    ]
  }
  this.clickHandler = this.clickHandler.bind(this);

}

clickHandler(postText, value) {
  let currentState = Object.assign( {},
    this.state
  );

  console.log(postText);

  const quesIndex = currentState.questions.findIndex((question) => (question.postText === postText));

  currentState.questions[quesIndex].answer = value;

  this.setState(currentState);
}

render () {
  const answeredQuestions = this.state.questions.filter((question) => (question.answer !== null))
  const unansweredQuestions = this.state.questions.filter((question) => (question.answer === null))
  const groupData = _.groupBy(unansweredQuestions, 'category');
  const strucData = Object.keys(groupData).map((title) => (
    {title: title, questions: unansweredQuestions.filter((question)=>(question.category === title))}
  ))

  const cardData = strucData.map(({title, questions}) => (<CardSection clickHandler={this.clickHandler} title={title} questions={questions} />))

  const summaryList = answeredQuestions.map((question) => (
    <li>{question.preText}{question.postText} — <em>{question.answer}</em></li>
  ))

  const summaryText = answeredQuestions.length === 0 ?  '' : 'Summary:'

return (
  <Layout>
  <div style={{margin: '50px'}} className="ui text container">
    <h1 className="ui header">Interview</h1>
    <p>
      <i class="exclamation icon"></i>
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
    <p><i class="lightbulb icon"></i><strong>Tip:</strong> Building rapport will help the child open up faster. Never give the child money, but instead:</p>

    <ul>
      <li>Offer them food</li>
      <li>Tell them your name</li>
      <li>Smile often, and make them laugh</li>
      <li>Get them to talk at least as much as you</li>
    </ul>

    {cardData}

    <p style={{marginTop: '50px'}}>{ summaryText }</p>
    <ul>
      {summaryList}
    </ul>
    <Link style={{marginTop: '50px'}} className="ui blue floated right button" to="/app/checklist">Finish Interview</Link>
  </div>
</Layout>)
}}

export default Interview
