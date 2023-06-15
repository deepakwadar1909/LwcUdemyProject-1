import { LightningElement, api } from 'lwc';

export default class P2cSliderCmp extends LightningElement {

    //Step - 2
    val = 20
    changeHandler(event) {
        this.val = event.target.value
    }

    @api resetSlider() {
        this.val = 50
    }
}