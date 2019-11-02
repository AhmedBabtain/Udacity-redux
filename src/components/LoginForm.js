import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from 'react-redux'
import { setAuthedUser } from "../redux/actions/authedUser";
import { withRouter } from "react-router-dom";
class LoginForm extends Component {
    state = {
        selecedUser:''
    }

    changeAuthUser = (e) => {
       
        const user = e.target.value
        this.setState({selecedUser:user})
    }

    handleSginIn = (e) => {
        e.preventDefault()
        const selecedUser = this.state.selecedUser

        if (selecedUser === '') {
            alert("Please select user")
        } else {
            this.props.dispatch(setAuthedUser(selecedUser))
            localStorage.setItem('authedUser',selecedUser)
            this.props.history.push('./')
        }
    }
    render() {
        const { usersList } = this.props
        const userInfo = usersList.find((user) => user.id === this.state.selecedUser)
        console.log('userInfo',userInfo);
        
       
        return <Card>
            <Card.Header>Welcome to would you rather App
            </Card.Header>
            {userInfo && 
                      <Card.Body>
                          <img src={'./'+userInfo.avatarURL} alt={userInfo.name} variant="top"></img>
                        
                      </Card.Body>
                    }
            <Card.Body>
                <Card.Text>Please <strong>Sign in</strong> to be continue: </Card.Text>
                <Form onSubmit={this.handleSginIn}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control as="select" onChange={this.changeAuthUser}>
                            <option></option>
                            {usersList.map((userItem) => <option key={userItem.id} value={userItem.id}>
                                 {userItem.name}
                            </option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Sign in
                </Button>
                </Form>
            </Card.Body>
        </Card>

    }
}


function mapStateToProps({ users }){
    const usersList = Object.values(users)
    return {
        usersList
    }
}
export default withRouter(connect(mapStateToProps)(LoginForm))