import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeModel = new Employee('', '', 1234567890, '', '');

  onSubmit() {
    console.log(this.employeeModel);
    let res = document.getElementById("result");
    if (res){
      res.classList.toggle('d-none');
    }
  }
}
