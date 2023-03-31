import { LightningElement } from 'lwc';

export default class ConditionalRendaring extends LightningElement {
    isVisible = false

    handleClick() {
        this.isVisible = true
    }
}