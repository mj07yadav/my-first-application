import { Component, OnInit } from '@angular/core';
import { productlist } from '../productlist';

@Component({
    selector:'app-products',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent implements OnInit{
    productlist=productlist;
    ngOnInit(): void {
        console.log(productlist);
    }
    

    share(){
        window.alert("The Product has been shared !");
    }

    onNotify(){
        window.alert("You will be notified when Product will be available !");
    }
}