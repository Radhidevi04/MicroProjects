import { Component } from '@angular/core';
import { employee } from './Model/employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : employee;
  result : string;
  employeeArr : employee[];
  flag : boolean;

  constructor(private service : EmployeeService){
    this.employee  = new employee();
    this.result = "";
    this.employeeArr = [];
    this.flag = false;
  }
  insertemployee(data:any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.insertemployee(this.employee);
  }

  updateemployee(data:any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.updateemployee(this.employee);
  }
  deleteemployee(data:any){
    this.result = this.service.deleteemployee(data.empId);
  }

  findAllEmployee(){
    this.employeeArr = this.service.findAllEmployee();
    this.flag = true;
  }
  findEmployee(data:any){
    this.employee = this.service.findEmployee(data.empId);
    this.result=this.employee.id + " " + this.employee.empName + " "+this.employee.empSalary;
  }
}
