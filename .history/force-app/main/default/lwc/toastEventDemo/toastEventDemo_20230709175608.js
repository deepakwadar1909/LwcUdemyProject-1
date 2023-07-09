import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastEventDemo extends LightningElement {

    myTitle = 'Salesforce Toast Event'

    //1st function
    handleClick(){
        this.event;
    }

    //2nd function

    showToast(){
        const event = new ShowToastEvent({
            title : 'Show Toast Demo',
            message : 'Toast Example Demo',
            variant : 'success',
        })
        this.dispatchEvent(event);
    }

}