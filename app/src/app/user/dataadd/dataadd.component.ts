import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
// import { Student } from 'src/app/shared/student.model';
import { Location } from '@angular/common';
import { UserService } from '../../shared/user.service';
import { AdminserviceService } from '../../shared/adminservice.service';
@Component({
  selector: 'app-dataadd',
  templateUrl: './dataadd.component.html',
  styleUrls: ['./dataadd.component.css']
})
export class DataaddComponent implements OnInit {  
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
    const myid = this.route.snapshot.paramMap.get('studentId') 
     this.adminservice.getIndividualUser(myid).subscribe( 
      res => { 
        this.studentData = res           
    }  )    
  }
  modifyData( userId, fullName, English, Matha,Hindi) { 
    const oo = this.studentData._id
   this.adminservice.addTask(this.studentData._id, userId, fullName, English, Matha, Hindi ).subscribe(
  res => {
 this.userddd = res
  }
)
}  
  goBack():void {
      this.location.back()
          }   
      
}
