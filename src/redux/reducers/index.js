import { combineReducers } from 'redux'

//reducers
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
export default combineReducers({
    users,
    questions,
    authedUser
})
