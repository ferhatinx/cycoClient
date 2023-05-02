import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeComponentsModule } from './home-components/home-components.module';
import { DialogModule } from '../dialogs/dialog.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
   
    HomeComponentsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
