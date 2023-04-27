import { LightningElement, track, wire } from 'lwc';
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

    doSorting(event) {
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
        this.sortData(this.sortBy, this.sortDirection);
    }

    sortData(fieldName, direction) {
        let parseData = JSON.parse(JSON.stringify(this.data));
        //return the value stored in the field
        let keyValue = (a) => {
            return a[fieldName];
        };

        //checking reverse direction
        let isReverse = direction === 'asc' ? 1 : -1;

        //sorting data
        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : '';
            //handling null values
            y = keyValue(y) ? keyValue(y) : '';
            //sorting values based on direction
            return isReverse * ((x > y) - (y > x));
        });
        this.data = parseData;
    }
}