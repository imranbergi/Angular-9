import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGIFDIRECTIVEComponent } from './ngifdirective/ngifdirective.component';
import { TestingComponent } from './testing/testing.component';
import { NGIFELSEDIRECTIVEComponent } from './ngifelsedirective/ngifelsedirective.component';
import { NGIFELSETHENDIRECTIVEComponent } from './ngifelsethendirective/ngifelsethendirective.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LogInComponent } from './log-in/log-in.component';
import { RESOLVEComponent } from './resolve/resolve.component';
import { SERVICESComponent } from './services/services.component';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
// import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
//import { NgswitchdirectiveComponent } from './ngswitchdirective/ngswitchdirective.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NGIFDIRECTIVEComponent,
    TestingComponent,
    NGIFELSEDIRECTIVEComponent,
    NGIFELSETHENDIRECTIVEComponent,
    LoginEmployeeComponent,
    LoginCustomerComponent,
    LogInComponent,
    RESOLVEComponent,
    SERVICESComponent,
    NgfordirectiveComponent,
    //NgSwitchDirectiveComponent,
    //NgswitchdirectiveComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
