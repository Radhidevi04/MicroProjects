import { Injectable } from '@angular/core';
import { employee } from './Model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string;
  employeeArr : employee[];
  employee : employee;

  constructor(private http: HttpClient) { 
    this.url= "http://localhost:3004/employees";
    this.employee = new employee ();
    this.employeeArr = [];
  }
  insertemployee(employee: employee){
    this.http.post<employee>(this.url, employee).subscribe();
    return " Employee Details added"
  }

  updateemployee(employee: employee){
    this.http.put<employee>(this.url+"/"+employee.id, employee).subscribe();
    return " Employee Details Updated"
  }
  deleteemployee(empId: number){
    this.http.delete<employee>(this.url+"/"+empId).subscribe();
    return " Employee Details Deleted"
  }
  findAllEmployee(){
    this.http.get<employee[]>(this.url).subscribe(data => this.employeeArr = data);
    return this.employeeArr;
  }
  findEmployee(empId : number){
    this.http.get<employee>(this.url+"/"+empId).subscribe(data => this.employee = data);
    return this.employee;
  }
}
