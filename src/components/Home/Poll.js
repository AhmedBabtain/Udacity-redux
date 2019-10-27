import React, { Component } from "react";
import Result, { } from "./Result";
import { Row, Col, Card, Form, Button } from "react-bootstrap";


class Poll extends Component {
    render() {
        return <Card>
            <Card.Header>Ask by ...</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                      <Card.Img variant="top" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" />
                    </Col>
                    <Col>
                        <Result isVoted={true}/>
                        <Result />
                    </Col>
                    <Col>
                    <Form>
            
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  name={'a'}
                />
          
                <Form.Check
                  type={type}
                  label={`disabled ${type}`}
                  id={`disabled-default-${type}`}
                  name={'a'}
                />
              </div>
            ))}
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}

export default Poll