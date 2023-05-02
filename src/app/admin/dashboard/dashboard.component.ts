import { Component } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor() {
    
  }
  setId:string;
  modalOfGetId(modalId:string): void {
    this.setId = modalId;
    
  }
  
}
