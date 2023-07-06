import { LightningElement, track, wire } from 'lwc';
import getAccContacts from '@salesforce/apex/WrappeClassDemo.fetchAccountContactDetails';

const columns = [
    {
        label : 'Account Name',
        fieldName : 'AccountLink',
        type : 'url',
        typeAttributes :{
            label : {
                fieldName : 'AccountName'
            },
            target : '_blank'
        }
    },
    {
        label : 'Type',
        fieldName : 'type',
    },
    {
        label : 'Total Contacts',
        fieldName : 'totalContacts',
    },
    {
        label : 'Address',
        fieldName : 'billingAdress',
    }
]

export default class WrapperClassInLwc extends LightningElement {

    @track columns = columns;
    @track data;
    @track error;
    @wire(getAccContacts)
    wiredAccountData({error,data}){
        if(data){
            this.data = data;
        }
        else{
            this.error = error;
        }
    }

}