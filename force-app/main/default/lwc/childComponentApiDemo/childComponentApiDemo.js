import { LightningElement, api } from 'lwc';

export default class ChildComponentApiDemo extends LightningElement {
    @api getValueFromParent;
    @api getDataFromParentCmp;
}