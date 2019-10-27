import React, { Component } from "react";
import { Card, Row, Col, ListGroup, Badge } from "react-bootstrap";

class BoardCard extends Component {
    render() {
        return <Card className={'m-3 text-center'} >

            <Card.Body>
                <Row>
                    <Col sm={3}>
                        <Card.Img variant="bottom" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" />
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header>{'{Username}'}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Answerd Quetions: {'{0}'}</ListGroup.Item>
                                <ListGroup.Item>Created Quetions: {'{0}'}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col sm={3}>
                    <Card>
                            <Card.Header>SCORE</Card.Header>
                            <Card.Body>
                                <h1>
                                <Badge lg  variant="success">0</Badge>
                                </h1>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}

export default BoardCard