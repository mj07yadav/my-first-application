import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productlist } from '../productlist';
import { CartService } from '../cart.service';
 

@Component({
    selector:'app-product-details',
    templateUrl:'./productdetails.component.html'
})
export class ProductDetailsComponent implements OnInit{
    product ;

        constructor(
            private route: ActivatedRoute,
            private cartService:CartService
          ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(+params.get('productid'));
            this.product = productlist[+params.get('productid')];
          });
    }

    addItemToCart(){
        this.cartService.addToCart(this.product);
        window.alert("Item is added into the cart Successfully !");
        console.log(this.cartService.items);
    }
    
}