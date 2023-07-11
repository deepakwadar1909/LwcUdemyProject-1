import { LightningElement, api } from 'lwc';

export default class LwcChildComponent extends LightningElement {
    Name;
    City;

    @api callFromParent(paremt1,paremt2){
        this.Name = paremt1;
        this.City = paremt2;
        this.ShowToast('Success', 'Successfully Called Aura to LWC', 'Success', 'dismissable')
    }
}