import { LightningElement, track } from 'lwc';

export default class CondRendFalseTemplate extends LightningElement {
    @track hideText =  true;

    hideHandler(event){
        this.hideText = false;
    }
}