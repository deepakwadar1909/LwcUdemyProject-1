import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement{
    
    fullName = "Zero to Hero"
    title = "AURA"

    changeHandler(event) {
        this.title = event.target.value
    }

    //@track
    address = {
        city: "Kolhapur",
        pincode: 416008,
        country:"India"
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