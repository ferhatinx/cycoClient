import { Component } from '@angular/core';
import { CustomToasterService, ToasterMessageType } from './services/toaster.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl : "./app.component.html"
 
})
export class AppComponent {
  constructor(private spinner:NgxSpinnerService){
    spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

}
