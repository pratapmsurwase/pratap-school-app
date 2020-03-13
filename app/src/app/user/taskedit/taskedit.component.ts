import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../../shared/adminservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {
  id: String;
  studentData
  userddd
   studentForm: FormGroup
  constructor(private route:ActivatedRoute, private adminService:AdminserviceService, private location:Location) {
    this.modifyFrom()
   }
  
   modifyFrom() {
    this.studentForm = new FormGroup({
      _id: new FormControl(),
      userId: new FormControl(),
  fullName: new FormControl(),
      English: new FormControl(),
      Matha: new FormControl(),
      Hindi: new FormControl(),
       })
   }

  ngOnInit() { 
    const myid = this.route.snapshot.paramMap.get('_id') 
    this.id = myid
    console.log(myid)
     this.adminService.getTaskById(myid).subscribe(
      res => {
     this.studentData= res 
     console.log(this.studentData)
      } ) 
      
  } 
  

   modifyData(userId, fullName ,English, Matha,Hindi) { 
    
       this.adminService.modifyTask(this.id, userId, fullName, English, Matha, Hindi ).subscribe(
  res => { 
 this.userddd = res
 console.log(this.userddd)
  }
)
}  
onclick():void {
      this.location.back()
          }   
      


}
