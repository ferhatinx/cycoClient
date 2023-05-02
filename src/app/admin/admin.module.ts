import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout.component';
import { DialogModule } from '../dialogs/dialog.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AdminlayoutComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModule,
    RouterModule.forChild([{path:"",component:DashboardComponent}])

    
  ]
})
export class AdminModule { }
