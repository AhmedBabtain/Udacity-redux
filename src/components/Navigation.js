import React, { Component, Fragment } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { unsetAuthedUser } from "../redux/actions/authedUser";
import { withRouter } from "react-router-dom";

class Navigation extends Component {

    logoOut = () => {
        this.props.dispatch(unsetAuthedUser(this.props.loginUser.id))
        localStorage.removeItem('authedUser')
        this.props.history.push('./')
    }
    render() {
        const { loginUser } = this.props


        return (

            <Navbar bg="light" expand="lg" className={'m-3'}>
                <Navbar.Brand><NavLink to="/Questions" className="nav-link">Would You Rather</NavLink></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <NavLink to="/Questions" className="nav-link">Home</NavLink>                
                            <NavLink to="/add"  className="nav-link">New Questions</NavLink>

                   
                            <NavLink to="/leaderboard"  className="nav-link">
                                Leader Board
                            </NavLink>
                 
                    </Nav>

                    {loginUser
                        ?
                        <Fragment>
                            <p>{loginUser.name}</p>
                            <img width="50px" height="50px" src={`/${loginUser.avatarURL}`} alt={loginUser.name}></img>
                            <Button variant="outline-danger" onClick={this.logoOut}>Logo out</Button>
                        </Fragment>

                        : <Link to="/login"></Link>
                    }


                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const loginUser = users[authedUser]

    return { loginUser }
}
export default withRouter(connect(mapStateToProps)(Navigation))