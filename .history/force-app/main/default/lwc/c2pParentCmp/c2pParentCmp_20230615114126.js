import { LightningElement } from 'lwc';

export default class C2pParentCmp extends LightningElement {
    //Step 4
    showModal = false

    //Step 6
    clickHandler(event) {
        this.showModal = true
    }
    //Step 9
    closeHandler2() {
        this.showModal = false
    }
}