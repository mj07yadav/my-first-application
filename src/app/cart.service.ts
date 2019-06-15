import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class CartService{
    items = [];
    firstarray;
    secondarray;
    numberofitemssubject=new Subject();

    constructor(private http:HttpClient){
    }


    addToCart(product){
        this.items.push(product);
        this.numberofitemssubject.next(this.items.length);
    }
    
    getItems(){
        return this.items;
    }

    clearCart(){
        this.items=[];
        return this.items;
    }

    getShippingDetails(){
        return this.http.get('/assets/shipping.json');
    }

    deleteThisItem(i){
        this.firstarray=this.items.slice(0,i);
        this.secondarray=this.items.slice(i+1,this.items.length);
        console.log(this.items+" ss "+this.firstarray+" ss "+this.secondarray);
        this.items=[];
        for(let i=0;i<this.firstarray.length;i++){
            this.items.push(this.firstarray[i]);
        }
        for(let i=0;i<this.secondarray.length;i++){
            this.items.push(this.secondarray[i]);
        }
        this.numberofitemssubject.next(this.items.length);
        return this.items;
    }
}