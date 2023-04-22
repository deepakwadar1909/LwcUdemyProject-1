import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}     //for storing answers
    correctAnswer = 0   // to show result
    isSubmitted= false //use to show the result
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

    //user for disabled our submit button
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    //for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'classslds-text-color_success':'slds-text-color_error'}`
    }
    //changeHandler gets called on every click on the option
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

    //on submitHandler
    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length
        this.isSubmitted = true
        //console.log("this.correctAnswers ", this.correctAnswer);
    }

    //from reset handler
    resetHandler() {
        this.selected = {}
        this.correctAnswer = 0
        this.isSubmitted = false
    }
}