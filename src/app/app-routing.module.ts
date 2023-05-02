import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminlayoutComponent } from './admin/adminlayout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  {path:"admin",component:AdminlayoutComponent, children:[
    {path:"",component:DashboardComponent},
  ]},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
