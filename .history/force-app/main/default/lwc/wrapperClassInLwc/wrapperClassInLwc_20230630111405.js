import { LightningElement, track, wire } from 'lwc';
import getAccContacts from '@salesforce/apex/WrapperClassDemo.'

const columns = [

    {
        label : 'Account Name',
        fieldName: 'AccountLink',
        type: 'URL',
        typeAttributes: {
            label: {
                fieldName: 'accountName'
            },
            taget : '_blank'
        }
    },
    {
        label : 'Type',
        fieldName: 'type'
    },
    {
        label : 'Total Contacts',
        fieldName: 'totalContacts'
    },
    {
        label : 'Address',
        fieldName: 'billingAddress'
    }
]
export default class WrapperClassInLwc extends LightningElement {

    @track columns = columns;
    @track data;
    @track error;

    @wire(getAccContacts)
    wiredAccountData(error, data) {
        if (data) {
            this.data = data;
        } else {
            this.error = error;
        }
    }
}