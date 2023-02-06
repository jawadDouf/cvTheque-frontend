import { Injectable } from '@angular/core';
import {ApprenantService} from "../apprenant/apprenant.service";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  students: any = [];

  constructor(private apprenantService:ApprenantService) { }

  getStudents(){
    return this.apprenantService.getApprenants();
  }
}
