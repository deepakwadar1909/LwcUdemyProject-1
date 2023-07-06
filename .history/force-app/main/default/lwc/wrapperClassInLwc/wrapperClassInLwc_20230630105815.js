import { LightningElement } from 'lwc';
import getAccContacts from '@salesforce/apex/WrapperClassDemo.fetchAccountContactDetails';

const columns = [

    {
        label : 'Account Name',
        fieldName: 'AccountLink',
        type: 'URL',
        typeAttributes: {
            label: {
                fieldName: 'accountName',
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
        label : 'Total Contacts',
        fieldName: 'totalContacts',
    }
]
export default class WrapperClassInLwc extends LightningElement {

     
}