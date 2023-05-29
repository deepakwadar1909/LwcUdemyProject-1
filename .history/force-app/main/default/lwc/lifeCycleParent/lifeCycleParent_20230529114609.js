import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    name
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

    changeHandler(event) {
        this.name = even.target.value
    }
}