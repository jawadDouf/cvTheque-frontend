import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  baseUrl:string = "http://localhost:8089/api/apprenant"
  constructor(private http:HttpClient) { }


  //bring all
  getApprenants() : Observable<any>{
    return this.http.get(this.baseUrl + "/all");
  }


}
