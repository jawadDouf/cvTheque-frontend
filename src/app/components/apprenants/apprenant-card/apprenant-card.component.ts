import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apprenant-card',
  templateUrl: './apprenant-card.component.html',
  styleUrls: ['./apprenant-card.component.css']
})
export class ApprenantCardComponent {

  @Input() student:any;



  ngOnInit(){
    console.log(this.student);
    
  }
  

}
