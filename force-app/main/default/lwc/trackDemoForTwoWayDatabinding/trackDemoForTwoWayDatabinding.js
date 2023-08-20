import { LightningElement, track } from 'lwc';

export default class TrackDemoForTwoWayDatabinding extends LightningElement {
    @track fullName = "Deepak Wadar";
    @track title = "Salesforce Developer";

    changeHandler(event){
        this[event.target.name] = event.target.value;
    }
}