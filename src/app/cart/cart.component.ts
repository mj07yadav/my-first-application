import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})
export class CartComponent implements OnInit{
    items= [];
    formmodel;
    firstarray;
    secondarray;
   
    ngOnInit() {  
        
    }

    constructor(private cartService:CartService,private formBuilder:FormBuilder,private route:Router){
        this.items=this.cartService.getItems();

        // this.formmodel=this.formBuilder.group({
        //     name: '',
        //     address:''
        // });
        if(this.items.length===0){
            console.log(this.items.length+" this for checking tthe logic");
            if(sessionStorage.getItem("token")===null){
                this.route.navigate(["/login"]);
            }else{
                this.route.navigate(['']);
            }
        }
    }
    clearCart(){
        this.cartService.clearCart();
        this.items=this.cartService.getItems();
    }

    onSubmitForm(){
        window.alert("Hi "+ sessionStorage.getItem("username") +" Your Products will be delivered shortly ! ");
        this.items=this.cartService.clearCart(); 
        this.route.navigate(['/']);
    }
    
    deleteThisItem(i){
        this.items=this.cartService.deleteThisItem(i);
    }
}