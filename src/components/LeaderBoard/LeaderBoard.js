import React, { Component } from "react";
import BoardCard from "./boardCard";

class LeaderBoard extends Component {
    render(){
        return <div>
            <BoardCard />
            <BoardCard />
            <BoardCard />
        </div>
    }
}

export default LeaderBoard