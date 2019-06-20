import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
export class ProductObject{
    constructor(product_name,
    product_description,
    product_price){

    }
}*/

@Injectable({
    providedIn: 'root'
})
export class ProductListService{
    productlist;

    constructor(private http: HttpClient){
    }
    
    getProductList(){
      const header = new HttpHeaders().set("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
         // return this.http.get('http://localhost:8080/productapi/getAllProductList');
          return this.http.get("http://localhost:8080/productapi/getAllProductList", {headers: header})
    }

}