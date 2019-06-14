import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})
export class CartComponent implements OnInit{
    items= [];
    formmodel;

    ngOnInit() {
      
    }
    constructor(private cartService:CartService,private formBuilder:FormBuilder,private route:Router){
        this.items=this.cartService.getItems();
        this.formmodel=this.formBuilder.group({
            name: 'Mritunjay Yadav',
            address:'A-4 Himgiri Colony , Moradabad ,Uttar Pradesh'
        });
    }

    clearCart(){
        this.cartService.clearCart();
        this.items=this.cartService.getItems();
    }

    onSubmitForm(formmodeldata){
        window.alert("Hi "+ formmodeldata.name +" Your Products will be delivered shortly ! at address \n"+formmodeldata.address);
        this.items=this.cartService.clearCart(); 
        this.route.navigate(['/']);
    }
}