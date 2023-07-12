import { LightningElement } from 'lwc';

export default class ShYtChildLwc extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new new CustomEvent('subevent', {
            detail: details,
            bubbles: false,
            composed: false
        });)
    }

    handleAdd(){

    }
}