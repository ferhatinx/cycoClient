import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogModule } from 'src/app/dialogs/dialog.module';


@NgModule({
  declarations: [
    ListComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MatPaginatorModule,
  ],
  exports:[
    ListComponent,
    FooterComponent,
    HeaderComponent
  ]

})
export class HomeComponentsModule { }
