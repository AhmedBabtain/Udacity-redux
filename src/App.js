import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation'
import { Route } from "react-router-dom";

import BoardCard from './components/LeaderBoard/boardCard';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Questions from "./components/Home/Questions";
import NewQuetion from './components/Home/NewQuetion';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  render() {
    return (
      <Container >
        <Navigation />
        {/* <Route exact path="/" component={App} /> */}
        <Row>
          <Col sm={12} s>
          <Route exact path="/" component={Questions} />
          <Route exact path="/Questions" component={Questions} />
          <Route exact path="/Questions/add" component={NewQuetion} />
          <Route exact path="/LeaderBoard" component={LeaderBoard} />
          <Route exact path="/BoardCard" component={BoardCard} />
          <Route exact path="/Login" component={LoginForm} />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default App;
