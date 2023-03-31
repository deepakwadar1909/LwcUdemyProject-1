import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement{
    
    fullName = "Zero to Hero"
    title = "AURA"


    changeHandler(event) {
        this.title = event.target.value
    }
    // user = ["a", "b"] //we cant bind
    
    // object = {
    //     name:"LWC learning"
    // }
    
    //Two way data binding
    //Methods
    // getName() {
        
    // }



}