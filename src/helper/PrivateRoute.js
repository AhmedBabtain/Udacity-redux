import React  from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'


export const PrivateRoute = ({component:Component, ...rest}) => {
    
    return (
    <Route 
        {...rest}
        render = {(props) => {

            return  rest.isAuthedUserLogIn
            ? (<Component {...props} /> )
            : (<Redirect to={{
                pathname: "/login",
                state: { from: props.location }
              }} />)
            
        }
          
        }
    />
)}

              

 export default connect()(PrivateRoute)