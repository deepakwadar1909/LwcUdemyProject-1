import { LightningElement } from 'lwc';

export default class ConditionalRenderingTest extends LightningElement {
    isVisible = false

    handleClick() {
        this.isVisible = true
    }
}