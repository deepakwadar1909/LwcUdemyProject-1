import { LightningElement, api } from 'lwc';

export default class CallLwcComponentFromAura extends LightningElement {
    DisplayText = false

    textValue = 'LWC function invoked from Aura..!';

    @api
}