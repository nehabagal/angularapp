import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import {Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes: Routes = [{ path:'',component: ProductComponent, children: [       //children components of product component
// {path: '', component: ProductComponent},
 {path:'laptop', component: LaptopComponent},          //localhost://4200/product/laptop
 {path: 'tablet', component: TabletComponent},            //localhost://4200/product/tablet
 {path:'washingmachine', component: WashingmachineComponent},
 {path: 'tv', component: TvComponent}
]}
];

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule { 
  constructor(){
    console.log("Products Module Called");
    
  }
}
