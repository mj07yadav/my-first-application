import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../productlist.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'app-products',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent implements OnInit{
    productlist;

    constructor(private http:HttpClient,private productlistservice:ProductListService){

    }

    ngOnInit(): void {
        this.productlistservice.getProductList().subscribe((res) => {
            this.productlist=res;
            console.log(this.productlist);
        })
    }
    

    share(){
        window.alert("The Product has been shared !");
    }

    onNotify(){
        window.alert("You will be notified when Product will be available !");
    }
}