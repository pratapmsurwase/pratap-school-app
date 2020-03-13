import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
// import { Student } from 'src/app/shared/student.model';
import { Location } from '@angular/common';

import { AdminserviceService } from '../../shared/adminservice.service';
@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {

  id;
  studentId;
  userddd
  studentForm: FormGroup
  studentData;
   
   
  constructor(private route:ActivatedRoute, private adminservice:AdminserviceService, private location:Location ) {
    this.taskForm()
   }

   taskForm() {
    this.studentForm = new FormGroup({ 
     _id: new FormControl( ),
     userId: new FormControl(),
    fullName: new FormControl(),
    English: new FormControl(),
    Matha : new FormControl(),
    Hindi : new FormControl()
     })
  }
  
    ngOnInit() { 
      const kk = this.route.snapshot.paramMap.get('_id') 
      this.studentId = kk
      console.log('the id ', kk)
       this.adminservice.getIndividualUser(kk).subscribe( 
        res => { 
          this.studentData = res     
          console.log(this.studentData)      

      }  )    
    }_id_id
    modifyData( English, Matha,Hindi) { 
      const oo = this.studentId
      console.log(oo)
     this.adminservice.addTask(this.studentId, this.studentData.userId, this.studentData.fullName, English, Matha, Hindi ).subscribe(
    res => {
   this.userddd = res
    }
  )
  }  
    goBack():void {
        this.location.back()
            }   
        
  }