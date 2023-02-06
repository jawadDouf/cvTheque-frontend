import { Component } from '@angular/core';
import { ApprenantService } from 'src/app/services/apprenant/apprenant.service';
import {CvComponent} from "../../components/apprenants/cv/cv.component";

@Component({
  selector: 'app-cme-view-apprenants',
  templateUrl: './cme-view-apprenants.component.html',
  styleUrls: ['./cme-view-apprenants.component.css']
})
export class CmeViewApprenantsComponent {

  students:any;

  constructor(private apprenantService:ApprenantService){}

    ngOnInit(){
      this.loadStudents();
    }

  //get the students
  loadStudents(){
     return this.apprenantService.getApprenants().subscribe((res)=>{
          console.log(res);
           this.students = res;
     })
  }
}
