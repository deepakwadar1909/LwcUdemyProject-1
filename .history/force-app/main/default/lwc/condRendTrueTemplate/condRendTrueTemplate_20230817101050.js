import { LightningElement, track } from 'lwc';

export default class CondRendTrueTemplate extends LightningElement {
    @track showText = false;

    showHandler(event){
        this.showText = true;
    }
}