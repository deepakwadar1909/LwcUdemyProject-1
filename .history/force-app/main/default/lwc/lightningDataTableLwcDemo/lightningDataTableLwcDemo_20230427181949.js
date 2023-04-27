import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelperClass.getAccountList';

const columns = [{
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
        label: 'Rating',
        fieldName: 'Rating',
        type: 'text',
        sortable: true
    },
    {
        label: 'Annual Revenue',
        fieldName: 'AnnualRevenue',
        type: 'Currency',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
        sortable: true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'url',
        sortable: true
    },
    ];
export default class LightningDataTableLwcDemo extends LightningElement {

    

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