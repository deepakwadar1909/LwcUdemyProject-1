import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/LWCDataTableSortingExample.getContacts';

const columns = [{
        label: 'First Name',
        fieldName: 'FirstName',
        type: 'text',
        sortable: 'true'
    },
    {
        label: 'Last Name',
        fieldName: 'LastName',
        type: 'text',
        sortable: 'true'
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
        sortable: 'true'
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'Email',
        sortable: 'true'
    },
    ];

export default class LightningDataTableSort extends LightningElement {
    //data table columns with rows actions
    //set sortable = true

    @track data;
    @track columns = columns;
    @track sortBy;
    @track sortDirection;

    @wire(getContacts)
    contacts(result) {
        if (result.data) {
            this.data = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }

    doSorting(event)
}