import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { handleAnswerQuestion } from "../../redux/actions/questions";
import { connect } from "react-redux";

class PollForm extends Component {

  state = {
    selecedAnswer:''
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    if (this.state.selecedAnswer === '') {
      alert('please seleced choose')
    } else {

      this.props
      .dispatch(handleAnswerQuestion( this.props.question.id,this.state.selecedAnswer))
    }

    //todo dispatch and redirect to...
  }

  changeSelecedAnswer = (choose) => {
    console.log(choose);
    
    this.setState({selecedAnswer:choose})
  }
    render() {
      const { question } = this.props
      const { optionOne,optionTwo } = question

        
        return <div>
          <Form onSubmit={this.handleSubmitForm}>
          
          
            <Form.Check 
            key={optionOne.text}
            type='radio'
            label={optionOne.text}
            name={'choose'}
            onChange={() => this.changeSelecedAnswer("optionOne")}
          />

          <Form.Check 
            key={optionTwo.text}
            type='radio'
            label={optionTwo.text}
            name={'choose'}
            onChange={() => this.changeSelecedAnswer("optionTwo")}
          />    
       
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Form>
        </div>
        
        
    }
}

export default connect()(PollForm)