import { LightningElement } from 'lwc';
import getAccContacts from '@salesforce/apex/WrapperClassDemo.fetchAccountContactDetails';

const columns = [

    {
        label : 'Account Name',
        fieldName: 'AccountLink',
        type: 'URL',
         
    },
    {},
    {},
    {}
]
export default class WrapperClassInLwc extends LightningElement {

     
}