import React, { Component } from "react";
import Result, { } from "./Result";
import { Form, Button } from "react-bootstrap";

class PollForm extends Component {
    render() {
        return <Form>
            
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
    }
}

export default PollForm