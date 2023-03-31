import { LightningElement } from 'lwc';

export default class conditionalRendering extends LightningElement {
    isVisible = false

    handleClick() {
        this.isVisible = true
    }
}