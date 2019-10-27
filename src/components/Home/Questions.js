import React, { Component } from "react";
import Poll from "./Poll";

class Questions extends Component {
    render(){
        return <div>
            Questions
            <Poll />
            <Poll />
            <Poll />
        </div>
    }
}

export default Questions