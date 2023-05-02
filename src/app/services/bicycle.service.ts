import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { bicycle } from '../Contracts/bicycle';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, firstValueFrom, of } from 'rxjs';
import { createBicycle } from '../Contracts/createBicycle';
import { updateBicycle } from '../Contracts/updateBicycle';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http : HttpclientService) { }

  getBicycles(page:number=0,size:number=5): Observable<{ bicycle: any[], totalCount: number }> {
    return this.http.get<{ bicycle: any[], totalCount: number }>({
      action:`?page=${page}&size=${size}`,
      controller:"bicycle"

    });
  }
  createBicycle(bicycle:createBicycle, successCallBack?:any,errorCallBack?:(error:string)=>void) {
    this.http.post({
      controller:"bicycle",
     
    },bicycle).subscribe(result =>{
      successCallBack();
    },(error:HttpErrorResponse)=>{
        errorCallBack(error.message); 
    });
  }
  updateBicycle(bicycle:updateBicycle, successCallBack?:any,errorCallBack?:(error:string)=>void){
    this.http.put({
      controller:"bicycle"
    },updateBicycle).subscribe(resul =>{
      successCallBack();
    },(error:HttpErrorResponse)=>{
      errorCallBack(error.message)
    })
  }
  async delete(id:string) {
    var deleteObs : Observable<any> =await this.http.delete({
      fullEndPoint:`https://localhost:7088/api/Bicycle?id=${id}`
    },id);
    await firstValueFrom(deleteObs);
    }

 async getBicycleById(id:string,successCallBack?:any,errorCallBack?:(error:string)=>void){
    this.http.get<bicycle>({
    controller:"bicycle",
    action:`GetBicycleWithById`
  },id).subscribe((value)=>{
    successCallBack()
  },(error:HttpErrorResponse)=>{
    errorCallBack(error.message);
  });
  }

 
}
