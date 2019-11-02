import React, { Component } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { handleAddQuestion } from "../../redux/actions/questions";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class NewQuetion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleChangeOptionTextOne = (e) => {
        const optionOneText = e.target.value
        this.setState({
            optionOneText
        })
    }

    handleChangeOptionTwoOne = (e) => {
        const optionTwoText = e.target.value
        this.setState({
            optionTwoText
        })
    }

    addQuestion = (e) => {
        e.preventDefault()

        const { dispatch, history } = this.props
        const { optionOneText, optionTwoText } = this.state
        
        dispatch(handleAddQuestion(optionOneText, optionTwoText))
        history.push(`/`)
    }
    render() {
        const { optionOneText, optionTwoText } = this.state

        return <Card>
            <Card.Header><strong>Create New Question</strong></Card.Header>
            
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><strong>Would you Rather</strong></Form.Label>
                        <Form.Control type="text" placeholder="First Option" value={optionOneText} onChange = {this.handleChangeOptionTextOne} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><strong>OR</strong></Form.Label>
                        <Form.Control type="text" placeholder="Second Option" value={optionTwoText} onChange={this.handleChangeOptionTwoOne} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">

                    </Form.Group>
                    <Button variant="primary" type="submit" onClick = {this.addQuestion}>
                        Submit
                 </Button>
                </Form>
            </Card.Body>
        </Card>

    }
}

export default  withRouter(connect()(NewQuetion))

