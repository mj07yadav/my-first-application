import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './Products/product.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductAlertComponent } from './productalert/productalert.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

const approutes : Routes = [
  {path:'' , component:ProductComponent},
  {path:'productdetails/:productid', component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'shipping',component:ShippingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TopbarComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
