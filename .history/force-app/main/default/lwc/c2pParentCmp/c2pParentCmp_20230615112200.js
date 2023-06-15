import { LightningElement } from 'lwc';

export default class C2pParentCmp extends LightningElement {
    //Step 4
    showModal = false

    //Step 6
    clickHandler(event) {
        this.showModal = true
    }
}