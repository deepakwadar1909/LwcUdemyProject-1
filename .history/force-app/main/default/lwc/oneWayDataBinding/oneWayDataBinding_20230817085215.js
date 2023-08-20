import { LightningElement, track } from 'lwc';

export default class OneWayDataBinding extends LightningElement {

    fullName = "Deepak A Wadar";
    jobTitle = "Software Engineer"

    handleChange(event){
        this.jobTitle = event.target.value;
    }

    @track address={
        city : 'Kolhapur',
        pin : '416008',
        country : 'India'
    }
}