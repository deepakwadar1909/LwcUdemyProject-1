import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectBtn=''
    render() {
        return this.selectBtn === 'Signup' ? signupTemplate : this.selectBtn === 'Signin' ? signinTemplate : renderTemplate 
    }

    handleClick(event) {
        this.selectBtn = event.target.label
    }

    submitHandler() {
        console.log('Sign');
    }
}