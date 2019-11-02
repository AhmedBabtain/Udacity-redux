import { saveQuestion, saveQuestionAnswer } from "../../util/API";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = "ADD_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

//Retrive Questions
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

//Add Question
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        console.log('authedUser', authedUser);
        
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        }).then((question) => dispatch(addQuestion(question.question)))

    }
}

// Answer Question
function answerQuestion(questionAnswerInfo) {
    return {
        type: ANSWER_QUESTION,
        questionAnswerInfo
    }
}
export function handleAnswerQuestion(qid, answer) {

    return (dispatch, getState) => {
        const { authedUser } = getState()
        
        //authedUser, qid, answer 
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            dispatch(answerQuestion({ authedUser, qid, answer}))
        })
    }
}

