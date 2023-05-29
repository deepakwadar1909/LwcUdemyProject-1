import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    
    constructor() {
        super()
        console.log("Parent constructor Called");
    }

    connectedCallback() {
        console.log("Parent connectedCallback Called");
    }

    renderedCallback() {
        console.log("Parent renderedCallback Called");
    }
    /*name
    changeHandler(event) {
        this.name = event.target.value
    }*/
}