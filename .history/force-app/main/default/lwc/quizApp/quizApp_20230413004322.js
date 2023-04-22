import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}     //for storing answers
    myQuestions = [
        {
            id: "Q.1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Q.2",
            question: "Which of the file is invalid in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer:"b"
        },
        {
            id: "Q.3",
            question: "Which of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer:"c"
        }
 
    ]

    get allNotSelected() {
        return(Object.keys(this.selected ))
    }
    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name, value} = event.target
        // const name = event.target.name;
        // const value = event.target.value;
        this.selected = { ...this.selected, [name]: value }
        // this.selected = { ...this.selected, ["question"]: "b" }
        //this.selected={"question": "b"}
    }

    submitHandler() {
        
    }

    resetHandler() {
        
    }
}