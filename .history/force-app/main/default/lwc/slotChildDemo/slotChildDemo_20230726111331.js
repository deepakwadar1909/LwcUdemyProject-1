import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {

    handleFooterChange(){
        const footerElem = this.template.querySelector('.slds-card__footer')
    }
}