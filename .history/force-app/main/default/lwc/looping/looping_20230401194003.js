import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Ford", "Audi", "Maruti", "Mastang", "Hundai"]

    ceoList = [{
        id: 1,
        company: "Google",
        name:"Sundar Pichai"

    },
        {
            id: 2,
            company: "Facebook",
            name:"Mark Zuckerberg"
        },
        {
            id: 3,
            company: "Apple",
            name:"Tim Cook"
        },
        {
            id: 4,
            company: "Twitter",
            name:"Elon Musk"
        }
    ]
}