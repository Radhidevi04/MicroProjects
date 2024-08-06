import { Component } from '@angular/core';
import { LabService } from '../lab.service';
import { lab } from '../Model/lab';

@Component({
  selector: 'app-system-no',
  templateUrl: './system-no.component.html',
  styleUrl: './system-no.component.css'
})
export class SystemNoComponent {
  lab : lab;
  result : string;
  labArr : lab[];
  flag : boolean;

  constructor(private service : LabService){
   this.lab = new lab();
   this.result = "";
   this.labArr = [];
   this.flag = false;
  }
  insertlab(data:any){
   this.lab.id = data.sysno;
   this.lab.stuRegno = data.stuRegno;
   this.lab.stuName = data.stuName;
   this.lab.stuRolno = data.stuRolno;
   this.lab.stuDept = data.stuDept;
   this.result = this.service.insertlab(this.lab);
  }
  updatelab(data:any){
   this.lab.id = data.sysno;
   this.lab.stuRegno = data.stuRegno;
   this.lab.stuName = data.stuName;
   this.lab.stuRolno = data.stuRolno;
   this.lab.stuDept = data.stuDept;
   this.result = this.service.updatelab(this.lab);
  }
  deletelab(data:any){
   this.result = this.service.deletelab(data.sysno);
  }
  findlab(data:any){
    this.lab = this.service.findlab(data.sysno);
    this.result=this.lab.id + " " + this.lab.stuRegno + " " + this.lab.stuName + " " + this.lab.stuRolno + " " + this.lab.stuDept;

  }
  findAlllab(){
    this.labArr = this.service.findAlllab();
    this.flag = true;
  }
}
