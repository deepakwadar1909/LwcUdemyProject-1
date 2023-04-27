import { LightningElement, track } from 'lwc';

export default class LwcLifeCycleHooks extends LightningElement {

    showTemplatePrimary = true;
    @track isRendered = true; //boolean to check if component is rendered

    error;
    stack;

    constructor() {
        super(); //calling constructor of LightningElement
        console.log('constructor called =>');
    }

    connectedCallback() {
        let varElement = this.template;
        console.log('connectedCa');
    }

    render() {
        console.log('Render Called =>' + this.showTemplatePrimary);
        return this.showTemplatePrimary ? templatePrimary : templateSecondary;
    }

    renderedCallback() {
        if (this.isRendered) {
            console.log('Parent component renderedCallback =>');
            this.isRendered;
        }
    }

    disconnectedCallback() {
        console.log('Disconnected Callback =>');
    }

    errorCallback(error, stack) {
        console.log('Error Callback called =>');
        this.error = error;
        this.stack = stack;
    }
}