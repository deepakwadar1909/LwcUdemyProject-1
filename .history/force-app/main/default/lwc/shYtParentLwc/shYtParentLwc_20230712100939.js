import { LightningElement } from 'lwc';

export default class ShYtParentLwc extends LightningElement {
    countValue = 0;

    handleDecrement(){
        this.countValue--;
    }

}