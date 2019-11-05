import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class PageNotFound extends Component {
    render(){

        return <div>page not found 404</div>
    }
}

export default withRouter(PageNotFound)