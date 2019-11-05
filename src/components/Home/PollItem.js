import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom";
import { Row, Col, Card, Button} from "react-bootstrap"


class PollItem extends Component {


  toViewPoll = (e, pollId) => {
    e.preventDefault();
    const { history } = this.props
    history.push(`/questions/${pollId}`)
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
          <Col sm={3}>
            <Card.Img variant="top" src={ author.avatarURL }  alt={author.name} height={100}/>
          </Col>
          <Col sm={6}>
            <h3>Would you rather..</h3>
            <p>{question.optionOne.text}</p>
          </Col>
          <Col sm={3}>
           
            <Button variant="success" onClick={(e) => this.toViewPoll(e, pollId)}>
              View Poll
            </Button>
            
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