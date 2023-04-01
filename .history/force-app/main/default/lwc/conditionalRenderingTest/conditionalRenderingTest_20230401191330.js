import { LightningElement } from 'lwc';

export default class ConditionalRenderingTest extends LightningElement {
    isVisible = false
    name
    handleClick() {
        this.isVisible = true
    }

    changeHandler(event) {
        this.name = event.target.value
    }

    get helloMethod() {
        return this.name === 'Hello'
    }

    //Falsy Values
    x = 0;
    
}