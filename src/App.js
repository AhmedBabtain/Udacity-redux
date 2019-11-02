import React, { Fragment } from 'react';

import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation'

import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Questions from "./components/Home/Questions";
import NewQuetion from './components/Home/NewQuetion';
import LoginForm from './components/LoginForm';
import Poll from './components/Home/Poll';

import { receiveInitialDataHandle } from "./redux/actions/shared";
// import { q } from "./redux/actions/questions";


import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PrivateRoute }  from "./helper/PrivateRoute";
import PageNotFound from './components/PageNotFound';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(receiveInitialDataHandle())
    localStorage.removeItem('authedUser')
  }

  render() {
  
    return (
      <Router>
         <Fragment>
           <Navigation/>
        <Container >
          <Row>
            <Col sm={12}>
              <Switch>
                <PrivateRoute exact path="/" component={Questions} />
                <PrivateRoute exact path="/Questions" component={Questions} />
                <PrivateRoute exact path="/Questions/:id" component={Poll} />
                <PrivateRoute exact path="/add" component={NewQuetion} />
                <PrivateRoute exact path="/LeaderBoard" component={LeaderBoard} />
                <Route path="/Login" component={LoginForm} />
                <PrivateRoute exact path="/404" component={PageNotFound} />
                <PrivateRoute component={PageNotFound} />
              </Switch>
              
            </Col>
          </Row>
        </Container>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
