import { LightningElement, track } from 'lwc';

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

    trackHandler(event) {
        //with @track
        this.address.city = event.target.value

        //without @track 
        // this.address = {...this.address, "city":event.target.value}
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