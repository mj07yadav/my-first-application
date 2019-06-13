import { Component } from '@angular/core';

@Component({
    selector:'app-products',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent{
    public productlist = [{"name":"Balls","description":"balls of every type",'price':800},
    {"name":"CounterStrike","description":"CounterStrike of every type",'price':600},
    {"name":"Bats","description":"Bats of every type",'price':200},
    {"name":"FootBall shoes",'price':900}];

    share(){
        window.alert("The Product has been shared !");
    }

    onNotify(){
        window.alert("You will be notified when Product will be available !");
    }
}