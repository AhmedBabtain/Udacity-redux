import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { getInitialData } from "../../util/API";

// const AUTH_ID = 'tylermcginnis'

export function receiveInitialDataHandle() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                // dispatch(receiveAuthedUser(AUTH_ID))
            })
    }
}