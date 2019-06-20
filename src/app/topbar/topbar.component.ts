import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector:'app-topbar',
    templateUrl:'./topbar.component.html',
    styleUrls:['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    numberOfItemsInCart:number;
    ngOnInit(): void {
        this.cartService.numberofitemssubject.subscribe((numberofitems:number) =>{
            this.numberOfItemsInCart=numberofitems;
        });   
    }
    itemsincart:number;

    constructor(private cartService:CartService){
       
    }
    
    logoutMethod(){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
    }

}