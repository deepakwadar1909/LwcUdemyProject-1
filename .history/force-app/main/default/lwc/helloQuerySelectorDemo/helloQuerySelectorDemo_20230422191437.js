import CleanStatus from '@salesforce/schema/Account.CleanStatus';
import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames =["John", "Smith", "Mark", "Mike"]
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText);
        
        const userElements = this.template.querySelectorAll('.name')
        
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
        })
    }
}