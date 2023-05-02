import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Observable, elementAt, firstValueFrom } from 'rxjs';
import { bicycle } from '../Contracts/bicycle';
import { BicycleService } from '../services/bicycle.service';
import { HttpclientService } from '../services/httpclient.service';
import { CustomToasterService, ToasterMessageType } from '../services/toaster.service';

declare var $:any;

@Directive({
  selector: '[appBicycledelete]'
})
export class BicycledeleteDirective {

  constructor(
    private el:ElementRef,
    private _renderer:Renderer2,
    private bicycleService:BicycleService,
    private toaster:CustomToasterService,

    ) {
      const img = _renderer.createElement("img");
      img.setAttribute("src","../../../../assets/icons/delete.png")
      img.setAttribute("style","cursor:pointer;")
      img.width="25";
      img.height="25";
      _renderer.appendChild(el.nativeElement,img);
   }
   @Input() willDeletedId :string;
   @Output() callback : EventEmitter<any> =new EventEmitter();

   @HostListener("click")
   async delete(){
    debugger
    await this.bicycleService.delete(this.willDeletedId).then(()=>{
      this.callback.emit();
      this.toaster.message("Silme işlemi başarılı","Başarılı",ToasterMessageType.Success);
      
    }).catch((reason:string)=>{
      this.toaster.message("İşlem gerçekleşirken hata meydana geldi","Başarısız",ToasterMessageType.Error);
    })
  }

   

}
