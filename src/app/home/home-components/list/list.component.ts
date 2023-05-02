import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bicycle } from 'src/app/Contracts/bicycle';
import { createBicycle } from 'src/app/Contracts/createBicycle';

import { BicycleService } from 'src/app/services/bicycle.service';
import { ToasterMessageType } from 'src/app/services/toaster.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(
    private bicycleService:BicycleService,
    private toaster:ToastrService
    
    ){
     
    }
    //!Moddl
    detayModalaGonder(data){
        this.detayModalagidecek = data;
    }
      detayModalagidecek: bicycle;
      detayModalId:string = "detayModal";
    //!
    setIdModal:string;
  bicycle:bicycle[] =[];
  async ngOnInit() {
    this.bicycleService.getBicycles().subscribe((value)=>{
      this.bicycle = value.bicycle;
      this.totalBicycle=value.totalCount
     });
    
  }
  getBicycles(pageIndex:number, pageSize:number){
    this.bicycleService.getBicycles(pageIndex,pageSize).subscribe((value)=>{
      this.bicycle = value.bicycle;
     
     });

  }
  pageSizeOptions = [5, 10, 25];
  totalBicycle:number;
  pageIndex:number;
  pageSize:number;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  handlePageEvent($event){
    debugger;
    const pageSize:number = $event.pageSize
 
    this.getBicycles($event.pageIndex,pageSize);
  }
  
  }




