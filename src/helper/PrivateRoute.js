import React  from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'


export const PrivateRoute = ({component:Component, ...rest}) => {
    
    return (
    <Route 
        {...rest}
        render = {props => {
            console.log('props',props)
            return  localStorage.getItem("authedUser") 
            ? (<Component {...props} /> )
            : (<Redirect to="/login" />)
            
        }
          
        }
    />
)}

function mapStateToProps({ auhedUser }){
    return {
        auhedUser
    }
}
 export default connect(mapStateToProps)(PrivateRoute)