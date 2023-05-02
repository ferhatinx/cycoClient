import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AdminModule } from './admin/admin.module';
import { BicycledeleteDirective } from './directives/bicycledelete.directive';






declare var $: any;

;

@NgModule({
  declarations: [
    AppComponent,


   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    
    AdminModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot(),
    HttpClientModule,
  
 
   
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7088/api", multi:true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
