import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { bicycle } from 'src/app/Contracts/bicycle';
import { createBicycle } from 'src/app/Contracts/createBicycle';
import { BicycleService } from 'src/app/services/bicycle.service';
import { CustomToasterService, ToasterMessageType } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-create-bicycle-dialog',
  templateUrl: './create-bicycle-dialog.component.html',
  styles:[]
})
export class CreateBicycleDialogComponent {
  constructor(
    private bicycleService:BicycleService,
    private toasterService:ToastrService,
    private toaster:CustomToasterService,
    private http:HttpClient
    
  ){}
    @Input() modalId:string;
    
 createBicycle(brand:HTMLInputElement, model:HTMLInputElement){
      const crbicycle: createBicycle = new createBicycle();
      crbicycle.brand = brand.value;
      crbicycle.model = model.value;
      this.bicycleService.createBicycle(crbicycle,()=>{
       
        this.toasterService.success("Ürün Başarılı bir şekilde eklendi","İşlem Başarılı");
      },(error)=>{
      
           this.toasterService.error(error,"İşlem Başarısız");
      })
 }

}
