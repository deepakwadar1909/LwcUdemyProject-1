import { LightningElement, track } from 'lwc';

export default class TrackDecoratorDemo extends LightningElement {

    @track fullName = {
    fisrtname: "",
    lastname: ""
    }
}