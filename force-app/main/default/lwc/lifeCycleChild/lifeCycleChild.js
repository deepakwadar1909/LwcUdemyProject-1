import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

     constructor() {
        super()
        console.log("Child constructor Called");
    }

    connectedCallback() {
        console.log("Child connectedCallback Called");
        throw new Error('Loading of child component failed')
    }

    renderedCallback() {
        console.log("Child renderedCallback Called");
    }
    disconnectedCallback() {
        alert('Child disconnectedCallback Called')
    }
}