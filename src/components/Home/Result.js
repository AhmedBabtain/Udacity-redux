import React, { Component } from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

class Result extends Component {

    render(){
        const { isVoted } = this.props

        return <Card border={ isVoted ? "success": null} className='mb-2'>
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <ProgressBar now={60} label={`${60}%`}/>
            <Card.Text>
                1 out of 3 Votes
            </Card.Text>
            </Card.Body>
        </Card>
    }
}

export default Result