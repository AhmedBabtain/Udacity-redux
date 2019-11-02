import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom";
import { Row, Col, Card, Button} from "react-bootstrap"


class PollItem extends Component {


  toViewPoll = (e, pollId) => {
    e.preventDefault();
    console.log('todo: redirect to viewPoll components',pollId)
    const { history } = this.props
    history.push(`/Questions/${pollId}`)
  }

  render() {
    const { question, author, pollId } = this.props
   

    if (!question) { 
      return <Redirect to='/404' />
    }
    return <Card className='mb-3'>
      <Card.Header>Ask by {question.author}</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={2}>
            <img height={50} width={50} variant="top" src={ author.avatarURL }  alt={author.name} />
          </Col>
          <Col sm={7}>
            <h3>Would you rather..</h3>
            <p>{question.optionOne.text}</p>
          </Col>
          <Col sm={3}>
            <Row>
            <Button variant="success" onClick={(e) => this.toViewPoll(e, pollId)}>
              View Poll
            </Button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  }
}

function mapStateToProps({ questions, users }, {id}) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {
    question,
    author,
    pollId: id
  }
}
export default withRouter(connect(mapStateToProps)(PollItem))