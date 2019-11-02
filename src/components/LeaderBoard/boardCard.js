import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, Row, Col, ListGroup, Badge, Alert } from "react-bootstrap";

class BoardCard extends Component {

    render() {
        const { user, AnswerdQuestions, CreatedQuestions, Score } = this.props

        if(!user)
            return <Alert variant="danger">User does not exsist (id)</Alert>

        return <Card className={'m-3 text-center'} >
            <Card.Body>
                <Row>
                    <Col sm={2}>
                        <Card.Img variant="bottom" src={user.avatarURL} height={150} width={150} />
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header>{user.name}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Answerd Quetions: {AnswerdQuestions}</ListGroup.Item>
                                <ListGroup.Item>Created Quetions: {CreatedQuestions}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col sm={3}>
                    <Card>
                            <Card.Header>SCORE</Card.Header>
                            <Card.Body>
                                <h1>
                                <Badge variant="success">{Score}</Badge>
                                </h1>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}
function mapStateToProps({ users }, {id}) {
    const user = users[id]
    const AnswerdQuestions = user ? Object.keys(user.answers).length : 0

    
    const CreatedQuestions = user ? user.questions.length : 0
    const Score = CreatedQuestions + AnswerdQuestions

    return{
        user,
        AnswerdQuestions,
        CreatedQuestions,
        Score
    }
}
export default connect(mapStateToProps)(BoardCard)