import { Component } from '@angular/core';
import {CvService} from "../../../services/cv/cv.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  cv :any ;
  allCv:any = [];
  apprenantId:any;
    constructor(private cvService:CvService,private activeRoute:ActivatedRoute) {}

    ngOnInit(){
      this.cvService.getStudents().subscribe((students) => {
        this.apprenantId = this.activeRoute.snapshot.paramMap.get('id');
        students.filter((cv:any)=>{
          if(cv.id == this.apprenantId){
            this.cv = cv;
          }
        });
      });
    }

}
