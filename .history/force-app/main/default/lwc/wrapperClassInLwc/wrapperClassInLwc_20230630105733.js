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
        fieldName: 'AccountLink',
    },
    {},
    {}
]
export default class WrapperClassInLwc extends LightningElement {

     
}