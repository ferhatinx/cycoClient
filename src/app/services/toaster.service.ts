import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToasterService {

  constructor(
   private toaster: ToastrService
  ) { }
  message(message:string,title:string, messageType:ToasterMessageType = ToasterMessageType.Success){
    this.toaster[messageType](message,title)
  }
}
export enum ToasterMessageType{
  Success="success",
  Info="info",
  Warning="warning",
  Error="error"
}
