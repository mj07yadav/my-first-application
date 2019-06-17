import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../productlist.service';
import { CartService } from '../cart.service';
 

@Component({
    selector:'app-product-details',
    templateUrl:'./productdetails.component.html'
})
export class ProductDetailsComponent implements OnInit{
    product ;
    productlist;
        constructor(
            private route: ActivatedRoute,
            private cartService:CartService,
            private productlistservice:ProductListService
          ) { }

    ngOnInit(): void {
        this.productlistservice.getProductList().subscribe((res) => {
            this.productlist = res;
            console.log(this.productlist); 
            this.route.paramMap.subscribe(params => {
                console.log(+params.get('productid'));
                this.product = this.productlist[+params.get('productid')];
    
              });
        })
        
    }

    addItemToCart(){
        this.cartService.addToCart(this.product);
        window.alert("Item is added into the cart Successfully !");
        console.log(this.cartService.items);
    }
    
}