import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector:'app-shipping',
    templateUrl:'./shipping.component.html'
})
export class ShippingComponent implements OnInit{
    shippingDetails;

    ngOnInit(): void {
        this.shippingDetails=this.cartService.getShippingDetails();
    }

    
    
    constructor(private cartService:CartService){
    }

    

}