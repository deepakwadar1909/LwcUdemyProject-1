import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement{
    /* Data Binding example*/
    fullName = "Zero to Hero"
    title = "AURA"

    changeHandler(event) {
        this.title = event.target.value
    }

    //@track binding
    @track address = {
        city: "Kolhapur",
        pincode: 416008,
        country:"India"
    }

    trackHandler(event) {
        //with @track
        this.address.city = event.target.value

        //without @track - spread operator - JS
        // this.address = {...this.address, "city":event.target.value}
    }

    /** Getter  */




    // user = ["a", "b"] //we cant bind
    
    // object = {
    //     name:"LWC learning"
    // }
    
    //Two way data binding
    //Methods
    // getName() {
        
    // }



}