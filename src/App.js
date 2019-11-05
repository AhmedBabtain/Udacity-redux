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

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PrivateRoute }  from "./helper/PrivateRoute";
import PageNotFound from './components/PageNotFound';
import { receiveAuthedUser, unsetAuthedUser, setAuthedUser } from './redux/actions/authedUser';

class App extends React.Component {

  componentDidMount() {
    // const current = localStorage.getItem('authedUser')
    // if (current) {
    //   this.props.dispatch(setAuthedUser(current))
    // }else{
    //   localStorage.removeItem('authedUser')
    // }
    
    localStorage.removeItem('authedUser')
    this.props.dispatch(receiveInitialDataHandle())
    
  }
  render() {
    const {isAuthedUserLogIn} =this.props
  
    return (
      <Router>
         <Fragment>
           <Navigation/>
        <Container >
          <Row>
            <Col sm={12}>
              <Switch>
           
                <PrivateRoute exact path="/" component={Questions} isAuthedUserLogIn={isAuthedUserLogIn} />
                <PrivateRoute exact path="/Questions" component={Questions} isAuthedUserLogIn={isAuthedUserLogIn} />
                <PrivateRoute exact path="/Questions/:id" component={Poll} isAuthedUserLogIn={isAuthedUserLogIn} />
                <PrivateRoute exact path="/add" component={NewQuetion} isAuthedUserLogIn={isAuthedUserLogIn} />
                <PrivateRoute exact path="/leaderboard" component={LeaderBoard} isAuthedUserLogIn={isAuthedUserLogIn} />
                <Route path="/Login" component={LoginForm} />
                <Route exact path="/404" component={PageNotFound} isAuthedUserLogIn={isAuthedUserLogIn} />
                <Route component={PageNotFound} />
              </Switch>
              
            </Col>
          </Row>
        </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({authedUser}) {
    
  return {
    isAuthedUserLogIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
