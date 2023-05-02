import { Component, OnInit } from '@angular/core';
import { bicycle } from 'src/app/Contracts/bicycle';
import { BicycleService } from 'src/app/services/bicycle.service';
import { CustomToasterService, ToasterMessageType } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(
    private bicycleService:BicycleService,
    private toaster:CustomToasterService
  ){
  
  }
  p: number = 0;
 
  bicycle:bicycle[]=[]
  ngOnInit(): void {
   
    this.bicycleService.getBicycles(this.p,50).subscribe(result =>{
      this.bicycle = result.bicycle;
    });
  }
  getProduct(){
   
    this.bicycleService.getBicycles(this.p,50).subscribe(result =>{
      this.bicycle = result.bicycle;
    });
  }
 


}
