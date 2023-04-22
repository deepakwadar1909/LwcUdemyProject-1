import CleanStatus from '@salesforce/schema/Account.CleanStatus';
import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames =["John", "Smith", "Mark", "Mike"]
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        const userElements = this.querySelectorAll('.name')
        console.log(elem.innerText);
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
        })
    }
}