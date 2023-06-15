import { LightningElement } from 'lwc';

export default class C2pModalCmp extends LightningElement {
    //step 7
    closeHandler() {
        const myEvent = new CustomEvent('close', {
            detail: {
                msg: "Modal Closed Successfully!!"
            }
        })
        this.dispatchEvent(myEvent)
    }
}