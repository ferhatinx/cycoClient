import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DialogModule } from 'src/app/dialogs/dialog.module';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BicycledeleteDirective } from 'src/app/directives/bicycledelete.directive';




@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    BicycledeleteDirective,
  
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserModule, NgxPaginationModule,
  ]
})
export class DashboardModule { }
