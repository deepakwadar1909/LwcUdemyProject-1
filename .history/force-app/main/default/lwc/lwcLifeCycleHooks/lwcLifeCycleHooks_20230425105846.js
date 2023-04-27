import { LightningElement } from 'lwc';

export default class LwcLifeCycleHooks extends LightningElement {

    constructor() {
        super(); //calling constructor of LightningElement
        console.log('constructor called =>');
    }

    connectedCallback() {
        let varElement = this.template;
        console.log('connectedCa');
    }
}