import CleanStatus from '@salesforce/schema/Account.CleanStatus';
import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames =["John", "Smith", "Mark", "Mike"]
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        //dynamic styling
        elem.style.border = "1px solid red";
        console.log(elem.innerText);
        
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            //assign title dynamically
            item.setAttribute("title", item.innerText);
        })

        //lwc:manual demo
        const childElem = this.querySelector('.child')
        childElem.innerHTML ='<p>Hey I am a child element</p>'
    }
}