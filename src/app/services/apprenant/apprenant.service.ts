import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CvComponent} from "../../components/apprenants/cv/cv.component";

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  baseUrl:string = "http://localhost:8080/cv"
  constructor(private http:HttpClient) { }


  //bring all
  getApprenants() : Observable<any>{
    return this.http.get(this.baseUrl + "/all");
  }


}
