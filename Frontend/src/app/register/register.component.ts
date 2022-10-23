import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sex: SelectItem[];
  dateOfBirth: Date;
  constructor() {
    this.sex = [
      {label:'mężczyzna', value:'mężczyzna'},
      {label:'kobieta', value:'kobieta'},
      ];
   }

  ngOnInit(): void {

  }

  selectedSex="";

  storeValue(event) {
    console.log(event);
    this.selectedSex = event.originalEvent.srcElement.innerText;
}
}
