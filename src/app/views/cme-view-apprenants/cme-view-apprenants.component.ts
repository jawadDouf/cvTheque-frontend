import { Component } from '@angular/core';
import { ApprenantService } from 'src/app/services/apprenant/apprenant.service';
import { NgForm , NgModel} from '@angular/forms';
@Component({
  selector: 'app-cme-view-apprenants',
  templateUrl: './cme-view-apprenants.component.html',
  styleUrls: ['./cme-view-apprenants.component.css']
})
export class CmeViewApprenantsComponent {

  students:any;

  toSearchVariable:string="";

  constructor(private apprenantService:ApprenantService){}

  dropDownCond:boolean = false;

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

  drop(toFilterWith:string){

    this.dropDownCond = !this.dropDownCond;

    this.students = this.students.filter((student:any)=>{
      return student.competences.filter((oneComp:any)=>{
             oneComp.name ===  this.toSearchVariable;
      })
    })
    console.log(this.students);
  }

}
