import CleanStatus from '@salesforce/schema/Account.CleanStatus';
import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames =["John", "Smith", "Mark", ""]
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText);
    }
}