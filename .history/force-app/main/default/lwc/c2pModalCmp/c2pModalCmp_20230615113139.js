import { LightningElement } from 'lwc';

export default class C2pModalCmp extends LightningElement {
    //step 7
    closeHandler() {
        const myCustomEvent = new CustomEvent('close')
        this.dispatchEvent(myCustomEvent)
    }
}