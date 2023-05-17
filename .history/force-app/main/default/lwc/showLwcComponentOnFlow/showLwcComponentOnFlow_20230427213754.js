import { LightningElement, track, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class ShowLwcComponentOnFlow extends LightningElement {
    @api num1;
    @api num2;
    @track txtVal;

    connectedCallback() {
        this.txtVal = parseInt(this.num1) + parseInt(this.num2);
    }

    
}