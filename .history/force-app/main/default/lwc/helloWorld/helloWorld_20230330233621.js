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

    /** Getter  example*/

    user = ["Deepak", "Nandan", "John"]

    num1 = 10
    num2 = 20

    get firstUser() {
        return this.user[0]
    }

    get multiply() {
        return this.num1 * this.num2
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