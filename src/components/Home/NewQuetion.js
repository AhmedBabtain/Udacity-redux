import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

class NewQuetion extends Component {
    render() {
        return <Card>
            <Card.Header>Create New Quetion</Card.Header>
            
            <Card.Body>
            <Card.Text>Component The Quetions: </Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Would you Rather</Form.Label>
                        <Form.Control type="text" placeholder="First Option" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>OR</Form.Label>
                        <Form.Control type="text" placeholder="Second Option" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
            </Button>
                </Form>
            </Card.Body>
        </Card>

    }
}

export default NewQuetion