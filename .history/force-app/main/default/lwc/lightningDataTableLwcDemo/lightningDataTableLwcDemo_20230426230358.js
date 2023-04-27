import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelperClass.getAccountList';
export default class LightningDataTableLwcDemo extends LightningElement {

    @track column = [{
        label: 'Account Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
        sortable: true
    },
    {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
        sortable: true
    }
        

    ]
}