import { LightningElement } from 'lwc';

export default class ShYtChildLwc extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subevent'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('addevent'));
    }
}