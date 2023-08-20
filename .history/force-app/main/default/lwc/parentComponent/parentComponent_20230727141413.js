import { LightningElement } from 'lwc';
import ChildComponent from '../childComponent/childComponent';

export default class ParentComponent extends LightningElement {

    handleClick(event) {
        this.template.querySelector("c-child-component").handleChangeValue();
    }

    handleHelloWorld(event){
        // Get a reference to the childComponent component
        const helloWorldId = this.template.querySelector('c-child-component');

        ChildComponent.he
    }
}