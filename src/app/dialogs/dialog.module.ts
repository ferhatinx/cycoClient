import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBicycleDialogComponent } from './create-bicycle-dialog/create-bicycle-dialog.component';
import { FormsModule } from '@angular/forms';
import { BicycleDialogDetailComponent } from './bicycle-dialog-detail/bicycle-dialog-detail.component';





@NgModule({
  declarations: [
    CreateBicycleDialogComponent,
    BicycleDialogDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateBicycleDialogComponent,
    BicycleDialogDetailComponent
  ]
})
export class DialogModule { }
