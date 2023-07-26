import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class LwcPicklistWithoutRecordType extends LightningElement {

    @wire(getObjectInfo, {objectApiName : CONTACT_OBJECT})
    contactInfo;

    @wire(getPicklistValues,
    {
        recordTypeId: '$ContactInfo.data.def'
    }
    )
}