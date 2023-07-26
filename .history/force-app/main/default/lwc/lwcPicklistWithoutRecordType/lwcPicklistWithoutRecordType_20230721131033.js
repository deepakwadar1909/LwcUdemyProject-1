import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import LEADSOURCE_FILED from '@salesforce/schema/Contact.LeadSource';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class LwcPicklistWithoutRecordType extends LightningElement {

    value ='';      
    @wire(getObjectInfo, {objectApiName : CONTACT_OBJECT})
    contactMetadata;

    @wire(getPicklistValues,
    {
        recordTypeId: '$ContactInfo.data.defaultRecordTypeId',
        fieldApiName: LEADSOURCE_FILED
    }
    )
    leadSourceValues;

    handleChange(event) {

        this.value = event.detail.value;

    }
}