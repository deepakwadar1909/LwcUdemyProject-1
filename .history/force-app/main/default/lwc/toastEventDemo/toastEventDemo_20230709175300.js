import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastEventDemo extends LightningElement {

    myTitle = 'Salesforce Toast Event'

    //1st function
    handleClick(){

    }

    //2nd function

    showToast(){
        const event = new ShowToastEvent
    }

}