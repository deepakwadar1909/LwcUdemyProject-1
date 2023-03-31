import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement{
    
    name //undefined
    age = 30;
    fullname = "Deepak Wadar"
    showData = false
    details = {
        name: "dummy",
        place: "TX"
    }

    userList = ["a","b","c"]
}