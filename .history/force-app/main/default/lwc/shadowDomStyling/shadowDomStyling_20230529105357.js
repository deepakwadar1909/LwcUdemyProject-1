import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    renderedCallback() {
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling .slds-buttom{
            background: red;
            color: white;
        } 
        `
    }
}