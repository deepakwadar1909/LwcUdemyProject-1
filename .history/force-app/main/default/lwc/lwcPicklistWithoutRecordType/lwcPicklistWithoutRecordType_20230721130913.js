import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class LwcPicklistWithoutRecordType extends LightningElement {

    value ='';      
    @wire(getObjectInfo, {objectApiName : CONTACT_OBJECT})
    contactInfo;

    @wire(getPicklistValues,
    {
        recordTypeId: '$ContactInfo.data.defaultRecordTypeId',
        fieldApiName: LeadSource
    }
    )
    leadSourceValues;

    handleChange(event) {

        this.value = event.detail.value;

    }
}