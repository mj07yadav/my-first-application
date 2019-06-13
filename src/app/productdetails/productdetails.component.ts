import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../Products/product.component'; 

@Component({
    selector:'app-product-details',
    templateUrl:'./productdetails.component.html'
})
export class ProductDetailsComponent implements OnInit{
    product ;
    route :ActivatedRoute; 
    constructor(){
        this.route=new ActivatedRoute();
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.product = ProductComponent[+params.get('productId')];
          });
    }

    
}