import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './Products/product.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductAlertComponent } from './productalert/productalert.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './productdetails/productdetails.component';

const approutes : Routes = [
  {path:'' , component:ProductComponent},
  {path:'productdetails/:productid', component:ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TopbarComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
