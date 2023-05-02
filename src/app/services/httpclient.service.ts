import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private http: HttpClient, @Inject('baseUrl') private baseUrl: string
  ) { }

  private url(rqParameter: Partial<RequestParametre>): string {
    return `${this.baseUrl}/${rqParameter.controller ? `${rqParameter.controller}` : ""}/${rqParameter.action ? `${rqParameter.action}` : ""}`
  }
  get<T>(requestParameter: Partial<RequestParametre>, id?: string): Observable<T> {
    //         this.baseUrl;
    let url = "";
    url = `${this.url(requestParameter)}${id ? `/${id}` : ""}`

    return this.http.get<T>(url, { headers: requestParameter.headers });

  }
  post<T>(requestParameter : Partial<RequestParametre>, body:Partial<T>):Observable<T>{
    let url="";
    url = `${this.url(requestParameter)}`
    return this.http.post<T>(url,body ,{headers:requestParameter.headers})
  }
  put<T>(rqParameter:Partial<RequestParametre>, body: Partial<T>) : Observable<T>{
    let url:string ="";
    url = `${this.url(rqParameter)}`;
    return this.http.put<T>(url,body,{headers:rqParameter.headers});
  }
  delete<T>(requesstParameter: Partial<RequestParametre>, id:string) : Observable<T>
  {
    let url: string="";
    if(requesstParameter.fullEndPoint)
      url = requesstParameter.fullEndPoint;
    else
      url = ``;
    return this.http  .delete<T>(url,{headers:requesstParameter.headers,responseType:requesstParameter.responseType as 'json'});
  }

}



export class RequestParametre {
  controller?: string;
  action?: string;
  id?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  responseType?: string = "json";
}