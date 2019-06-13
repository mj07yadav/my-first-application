import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productlist } from '../productlist';
 

@Component({
    selector:'app-product-details',
    templateUrl:'./productdetails.component.html'
})
export class ProductDetailsComponent implements OnInit{
    product ;
        constructor(
            private route: ActivatedRoute
          ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(+params.get('productid'));
            this.product = productlist[+params.get('productid')];
          });
    }

    
}