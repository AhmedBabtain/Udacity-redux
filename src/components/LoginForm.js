import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

class LoginForm extends Component {
    render() {
        return <Card>
            <Card.Header>Welcome to would you rather App
            </Card.Header>

            <Card.Body>
                <Card.Text>Please <strong>Sign in</strong> to be continue: </Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control as="select" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
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

export default LoginForm