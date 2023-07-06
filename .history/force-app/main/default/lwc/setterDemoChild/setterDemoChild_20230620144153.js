import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userInfo
    @api
    get detail() {
        
    }

    set detail(data) {
        this.userInfo = data
    }
}