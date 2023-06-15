import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubCmpB extends LightningElement {
    connectedCallback() {
        this.callSubscriber()
    }
    callSubscriber() {
        pubsub.subscribe('componentA', function (message) {
            this.message = message
        })
    }
}