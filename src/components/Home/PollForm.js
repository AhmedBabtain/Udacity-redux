import React, { Component } from "react";
import { Form, Button, ListGroup,Card } from "react-bootstrap";
import { handleAnswerQuestion } from "../../redux/actions/questions";
import { connect } from "react-redux";
// import { with } from "react-dom";

class PollForm extends Component {

  state = {
    selecedAnswer: ''
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    if (this.state.selecedAnswer === '') {
      alert('please seleced choose')
    } else {
      this.props
        .dispatch(handleAnswerQuestion(this.props.question.id, this.state.selecedAnswer))

    }
 
  }

  changeSelecedAnswer = (choose) => {
    this.setState({ selecedAnswer: choose })
  }
  render() {
    const { question } = this.props
    const { optionOne, optionTwo } = question


    return <div>
      <Form onSubmit={this.handleSubmitForm}>

      <Card>
        <Card.Header>Would You Rather?</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form.Check
              key={optionOne.text}
              type='radio'
              label={optionOne.text}
              name={'choose'}
              onChange={() => this.changeSelecedAnswer("optionOne")}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              key={optionTwo.text}
              type='radio'
              label={optionTwo.text}
              name={'choose'}
              onChange={() => this.changeSelecedAnswer("optionTwo")}
            />
          </ListGroup.Item>
        </ListGroup>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
       </Card>
      </Form>
    </div>


  }
}

export default connect()(PollForm)