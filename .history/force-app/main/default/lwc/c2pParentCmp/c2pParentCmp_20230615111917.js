import { LightningElement } from 'lwc';

export default class C2pParentCmp extends LightningElement {
    showModal = false

    clickHandler(event) {
        this.showModal = true
    }
}