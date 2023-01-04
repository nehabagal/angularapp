import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [   //configuration of routes
{path: '', redirectTo:'login', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},   // localhost://4200/aboutus
  { path:'contactus', component: ContactusComponent},  // localhost://4200/contactus
  { path:'product', component: ProductComponent} // localhost://4200/product
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
