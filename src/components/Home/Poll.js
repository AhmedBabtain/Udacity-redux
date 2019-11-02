import React, { Component } from "react";
import PollResult, { } from "./PollResult";
import { Row, Col, Card } from "react-bootstrap";
import { withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PollForm from "./PollForm";

class Poll extends Component {

state = {
  choose:''
}

  submitForm = (e) => {
    e.preventdefault()
    console.log('e',e)
    
    console.log('anwserPoll')
  }
  handleChangeCheck = (e) => {
   
  }

  render() {
    const { question, askBy, isAnswered,authedUser } = this.props

    if (!question)
      return <Redirect to="/404" />

    return <Card>
      <Card.Header>Ask by {askBy.name}</Card.Header>
      
      <Card.Body>
        <Row>
          <Col>
            <img variant="top" src={`/${askBy.avatarURL}`} alt={askBy.name} />
          </Col>
          {isAnswered ?
          <Col>
            <Card.Text>Results: </Card.Text>
            <PollResult authedUser={authedUser} question= {question}  />
          </Col>
          : 
          <Col>
          <PollForm  authedUser={authedUser} question={question}/>
    
          
        </Col>
          }
         
        </Row>
      </Card.Body>
    </Card>
  }
}

function mapStateToProps({ users, authedUser, questions }, props) {

  const { id } = props.match.params
  const question = questions[id]
  const loginUser = users[authedUser]
  const isAnswered = loginUser? loginUser.answers[question.id] === undefined? false : true : false

  const askBy = question ? users[question.author] : null
  
  return {
    pollId:id,
    question,
    askBy,
    authedUser,
    isAnswered

  }

}
export default withRouter(connect(mapStateToProps)(Poll))