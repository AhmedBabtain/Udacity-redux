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

  render() {
    const { question, askBy, isAnswered,authedUser } = this.props

    if (!question)
      return <Redirect to="/404" />

    return <Card>
      <Card.Header>Ask by {askBy.name}</Card.Header>
      
      <Card.Body>
        <Row>
          <Col sm={2}>
            <Card.Img variant="top" src={`/${askBy.avatarURL}`} height={135}/>
          </Col>
          {isAnswered ?
          <Col>
            <Card.Header>Results </Card.Header>
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
  
  if (question) {
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
    
  } else {
    return {
      pollId:id,
      question,
    }
  }
 
  
  
  

}
export default withRouter(connect(mapStateToProps)(Poll))