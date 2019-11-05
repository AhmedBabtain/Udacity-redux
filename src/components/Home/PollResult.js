import React, { Component, Fragment } from "react";
import { Card, ProgressBar } from "react-bootstrap";

class PollResult extends Component {

    render(){
        const { authedUser, question } = this.props
        const { optionOne, optionTwo } = question

        const optionOneVotes = optionOne.votes.length
        const optionTwoVotes = optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        const optionOneVotesPresentage = optionOneVotes / totalVotes * 100
        const optionTwoVotesPresentage = 100 - optionOneVotesPresentage
        const votedAnswer = optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo'
    
        return <Fragment>
            <Card border={ votedAnswer === 'optionOne' ? "success": null} className='mb-2'>
                    <Card.Body>
                    <Card.Title>{optionOne.text}</Card.Title>
                    <ProgressBar now={optionOneVotesPresentage} label={`${optionOneVotesPresentage}%`}/>
                    <Card.Text>
                        {optionOneVotes} out of {totalVotes} Votes
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card border={ votedAnswer === 'optionTwo' ? "success": null} className='mb-2'>
                    <Card.Body>
                    <Card.Title>{optionTwo.text}</Card.Title>
                    <ProgressBar now={optionTwoVotesPresentage} label={`${optionTwoVotesPresentage}%`}/>
                    <Card.Text>
                        {optionTwoVotes} out of {totalVotes} Votes
                    </Card.Text>
                    </Card.Body>
                </Card>
        </Fragment>
        
    }
}

export default PollResult