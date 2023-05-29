import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent;
    changeHandler(event) {
        this.percent = event.target.value;
    }
}