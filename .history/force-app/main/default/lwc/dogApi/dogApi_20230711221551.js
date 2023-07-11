import { LightningElement } from 'lwc';
import getDogPicture from '@salesforce/apex/DogPictureCallout.getDogPicture';
export default class DogApi extends LightningElement {

    imageReady = false;
    loadingSpinner = false;

    handleClick(){
        this.loadingSpinner = true;
        
    }
}