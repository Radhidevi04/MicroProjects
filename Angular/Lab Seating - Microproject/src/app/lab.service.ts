import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lab } from './Model/lab'

@Injectable({
  providedIn: 'root'
})
export class LabService {
  url : string;
  lab : lab;
  labArr : lab[];


  constructor(private https:HttpClient) {
    this.url = "http://localhost:3006/labs";
    this.lab = new lab();
    this.labArr = [];
   }
   insertlab(lab : lab){
    this.https.post<lab>(this.url,lab).subscribe();
    return "Details added"
   }
   updatelab(lab:lab){
    this.https.put<lab>(this.url+"/"+lab.id,lab).subscribe();
    return "Details Updated"
   }
   deletelab(sysno:number){
    this.https.delete<lab>(this.url+"/"+sysno).subscribe();
    return "Details deleted"
   }
   findlab(sysno:number){
    this.https.get<lab>(this.url+"/"+sysno).subscribe(data => this.lab = data);
    return this.lab;
   }
   findAlllab(){
    this.https.get<lab[]>(this.url).subscribe(data => this.labArr = data);
    return this.labArr;
   }
   
}
