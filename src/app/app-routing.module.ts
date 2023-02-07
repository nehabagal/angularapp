import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ClothingComponent } from './clothing/clothing.component';
import { MenclothingComponent } from './clothing/menclothing/menclothing.component';
import { WomenclothingComponent } from './clothing/womenclothing/womenclothing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';


const routes: Routes = [   //configuration of routes
{path: '', redirectTo:'login', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},   // localhost://4200/aboutus
  { path:'contactus', component: ContactusComponent},  // localhost://4200/contactus
  {path: 'post', component: DemopostComponent},
  {path:'postdetails/:id',component: PostdetailsComponent},   //passing parameters to route
  {path:'product', canActivate:[AuthGuard], loadChildren: './product/products.module#ProductsModule'},  //creating lazy loading strategy for prdoucts module
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'}, //Lazy module strategy for orders module
  {path: 'adduser', canDeactivate:[UnsavedchangesGuard], component: AdduserComponent},
  {path:'clothing', component: ClothingComponent, children:[
    {path: 'menclothing', component: MenclothingComponent},
    {path: 'womenclothing', component: WomenclothingComponent}
  ]
},
  // { path:'product',component: ProductComponent, children: [       //children components of product component
  //  // {path: '', component: ProductComponent},
  //   {path:'laptop', component: LaptopComponent},          //localhost://4200/product/laptop
  //   {path: 'tablet', component: TabletComponent},            //localhost://4200/product/tablet
  //   {path:'washingmachine', component: WashingmachineComponent},
  //   {path: 'tv', component: TvComponent}
  // ]},  // localhost://4200/product
  {path: '**', component: PagenotfoundComponent}  //wildcard route to show unfound route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], //implementing pre loading strategy
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("Routing Module Called");
    
  }
}
