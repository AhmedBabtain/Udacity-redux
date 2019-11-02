import * as _DATA from "./_DATA";


export function getInitialData() {
    return Promise.all([
        _DATA._getUsers(),
        _DATA._getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestion(question){
    console.log('question',question);
    
    return _DATA._saveQuestion(question)
            .then((question) => ({
                question
            }))
}

export function saveQuestionAnswer(questionAnswerInfo){
    console.log()
    return _DATA._saveQuestionAnswer(questionAnswerInfo)
    .catch((e) => {
        console.log('message error: ',)
    })
}
