import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/LWCDataTableSortingExample.getContacts';
export default class LightningDataTableSort extends LightningElement {
    //datatable columns with rows actions
    //set sortable = true

    const columns = [{
        label: 'First Name',
        fieldName: 'FirstName',
        type: 'text',
        sortable: "true"
    },
    {
        label: 'Last Name',
        fieldName: 'LastName',
        type: 'text',
        sortable: "true"
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
        sortable: "true"
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'Email',
        sortable: "true"
    }
    ];
}