import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
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
    AssignTemplteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
