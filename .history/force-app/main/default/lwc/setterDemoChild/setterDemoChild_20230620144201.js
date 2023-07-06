import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userInfo
    @api
    get detail() {
        return this.userInfo
    }

    set detail(data) {
        this.userInfo = data
    }
}