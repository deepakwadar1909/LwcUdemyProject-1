import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcChildComponent extends LightningElement {
    Name;
    City;

    @api callFromParent(paremt1,paremt2){
        this.Name = paremt1;
        this.City = paremt2;
        this.ShowToast('Success', 'Successfully Called Aura to LWC', 'Success', 'dismissable');
    }

    ShowToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
            title : title,
            message : message,
            variant : variant,
            mode : mode
        });
        this.dispatchEvent(evt);
    }
}