import { LightningElement, track, wire } from 'lwc';
import getAccContacts from '@salesforce/apex/WrapperClassDemo.fetchAccountContactDetails';

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

    @wire getAccContacts
}