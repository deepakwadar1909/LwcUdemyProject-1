import { LightningElement, track } from 'lwc';

export default class TrackDemoForTwoWayDatabinding extends LightningElement {
    @track fullName = "Deepak Wadar";
    @track title = "Salesforce Developer";

    changeHandler1(event){
        this.fullName = event.target.value;
    }

    changehandler2(event){
        this.title = event.target.value;
    }
}