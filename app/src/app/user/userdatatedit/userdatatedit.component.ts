import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { StandardService } from '../standard.service';
// import { User } from 'src/app/shared/user.model';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { AdminserviceService } from '../../shared/adminservice.service';

@Component({
  selector: 'app-userdatatedit',
  templateUrl: './userdatatedit.component.html',
  styleUrls: ['./userdatatedit.component.css']
})
export class UserdatateditComponent implements OnInit {
  
  studentData
  id: String;
  studentForm: FormGroup
  
  constructor(private route: ActivatedRoute, private user: UserService, 
    private location: Location, private adminService:AdminserviceService, private fb:FormBuilder, 
    private router: Router) {
      this.modifyFrom()  
           
   } 
   modifyFrom() {
    this.studentForm = new FormGroup({
      _id: new FormControl( ),
     userId: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    DOB : new FormControl(),
    Address : new FormControl(),
      ParentPhone1 : new FormControl(),
   ParentPhone2 : new FormControl(),
   Standard: new FormControl()
    })
   }
   
  ngOnInit() { 
    const myid = this.route.snapshot.paramMap.get('userId') 
    this.id = myid 
    console.log(myid)
     this.adminService.getIndividualByUserID(myid).subscribe( 
      res => { 
        this.studentData = res  
    }  )        
        }  
   
   modifyData( userId, fullName, email, DOB,Address,
   ParentPhone1,ParentPhone2,Standard) {  
  this.adminService.modifyUser(this.id, userId, fullName, email, DOB,Address,
              ParentPhone1,ParentPhone2,Standard).subscribe(
              res => {
                      }  )
          }
      
          onclick() { 
            this.location.back()
                }   
  
}
