import { LightningElement, track } from 'lwc';

export default class CondRendFalseTemplate extends LightningElement {
    @track hideText =  false;

    hideHandler(event){
        this.hideText = true;
    }
}