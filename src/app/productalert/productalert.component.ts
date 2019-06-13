import { Component, Input ,Output,EventEmitter } from '@angular/core';


@Component({
    selector:'app-product-alert',
    templateUrl:'./productalert.component.html',
    styleUrls:['./productalert.component.css']
})
export class ProductAlertComponent{
@Input() product;

@Output() notify = new EventEmitter();

constructor(){
    
}


}