import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions = [
        {
            id: "Q.1",
            question: "Which one of the following is not a template loop",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Q.2",
            question: "Which of the file is invalid in LWC component folder",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Q.1",
            question: "Which one of the following is not a template loop",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer:"c"
        }
    ]
}