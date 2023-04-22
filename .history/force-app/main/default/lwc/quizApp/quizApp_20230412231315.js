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
            }
            
        }
    ]
}