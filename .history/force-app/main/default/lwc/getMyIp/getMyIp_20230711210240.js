import { LightningElement, track } from 'lwc';

export default class GetMyIp extends LightningElement {
    @track myIp;

    getIP(){
        const calloutURI = 'https://api.ipify.org?format=json';
        fetch(calloutURI, {
            method : "GET"
        }).then
    }
}