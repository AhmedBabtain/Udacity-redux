import React, { Component } from "react";
import { connect } from "react-redux";
import BoardCard from "./boardCard";

class LeaderBoard extends Component {
    render(){
        const { userIds } = this.props

        return <div>
            {userIds.map((id) => {
                return <BoardCard id={id} key={id} />
              })}
        </div>
    }
}

function mapStateToProps({ users }) {

    const usersVales = Object.values(users)
    .sort((a, b) => {
        var aScore = a.questions.length +  Object.keys(a.answers).length
        var bScore = b.questions.length + Object.keys(b.answers).length
        return bScore - aScore
    })

    const userIds = usersVales.map((user) => user.id)
    
    return{
        userIds
    }
}

export default connect(mapStateToProps)(LeaderBoard)