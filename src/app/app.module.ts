import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AssignStructDirectiveComponent } from './assign-struct-directive/assign-struct-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ParentCompoComponent } from './parent-compo/parent-compo.component';
import { ChildCompoComponent } from './child-compo/child-compo.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { AssignTemplteFormComponent } from './assign-templte-form/assign-templte-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AssignReactiveformComponent } from './assign-reactiveform/assign-reactiveform.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule} from '@angular/common/http';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { AssignPipeComponent } from './assign-pipe/assign-pipe.component';
import { PrefixPipe } from './prefix.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Emp2Component } from './emp2/emp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    NgswitchComponent,
    AssignStructDirectiveComponent,
    AttributeDirectiveComponent,
    CustomDirectiveDirective,
    ParentCompoComponent,
    ChildCompoComponent,
    SimpleFormComponent,
    AssignTemplteFormComponent,
    ReactiveFormsComponent,
    AssignReactiveformComponent,
    PipedemoComponent,
    CountPipe,
    Servicecomp1Component,
    Servicecomp2Component,
    FilterpipeComponent,
    FilterPipe,
    AssignPipeComponent,
    PrefixPipe,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Emp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
