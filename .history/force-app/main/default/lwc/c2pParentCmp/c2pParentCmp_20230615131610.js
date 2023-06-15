import { LightningElement } from 'lwc';

export default class C2pParentCmp extends LightningElement {
    //Step 4
    showModal = false
    msg
    //Step 6
    clickHandler(event) {
        this.showModal = true
    }
    //Step 9
    closeHandler(event) {
        this.msg = event.detail
        this.showModal = false
    }
}