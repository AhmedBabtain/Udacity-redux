import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import PollItem from "./PollItem";

class Questions extends Component {

  render() {
    const { AnwserQuestionIds, UnansweredQuestionIds } = this.props

    return <Tab.Container id="left-tabs-example" defaultActiveKey="unanswered">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content >
            <Tab.Pane eventKey="unanswered">
              {UnansweredQuestionIds.map((questionId) => {
                return <PollItem id={questionId} key={questionId} />
              })}

            </Tab.Pane>
            <Tab.Pane eventKey="answered">
              {AnwserQuestionIds.map((questionId) => {
                return <PollItem id={questionId} key={questionId} />
              })}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser]

  const QuestionIds = Object.keys(questions)
  const AnwserQuestionIds = user
    ? Object.keys(user.answers)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    : []

  const UnansweredQuestionIds = QuestionIds
    .filter((q) => !AnwserQuestionIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    AnwserQuestionIds,
    UnansweredQuestionIds
  }
}
export default connect(mapStateToProps)(Questions)