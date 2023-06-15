import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubCmpA extends LightningElement {
    message = 
    inputHandler(event) {
        this.message = event.target.value
    }

    publishHandler() {
        pubsub.publish('componentA', this.message)
    }
}