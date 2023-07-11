import { LightningElement, api } from 'lwc';

export default class LwcChildComponent extends LightningElement {
    Name;
    City;

    @api callFromParent(paremt1,paremt2){
        this.Name = 
    }
}