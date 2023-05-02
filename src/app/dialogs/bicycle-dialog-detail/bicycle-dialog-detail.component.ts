import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { bicycle } from 'src/app/Contracts/bicycle';
import { BicycleService } from 'src/app/services/bicycle.service';
import { CustomToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-bicycle-dialog-detail',
  templateUrl: './bicycle-dialog-detail.component.html',
  styleUrls: ['./bicycle-dialog-detail.component.css']
})
export class BicycleDialogDetailComponent {
  constructor(
    private bicycleService:BicycleService,
    private toasterService:ToastrService,
    private toaster:CustomToasterService
    
  ){}
    @Input() gelenData: bicycle;
    @Input() gelenId : string;

   
}
