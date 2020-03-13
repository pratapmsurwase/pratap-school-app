import { Component, OnInit, Input } from '@angular/core';
// import { Student } from 'src/app/shared/student.model';

import { ActivatedRoute } from '@angular/router';
// import { User } from 'src/app/shared/user.model';
import { Location } from '@angular/common';
import { UserService } from '../../shared/user.service';
import { AdminserviceService } from '../../shared/adminservice.service';

@Component({
  selector: 'app-progressdata',
  templateUrl: './progressdata.component.html',
  styleUrls: ['./progressdata.component.css']
})
export class ProgressdataComponent implements OnInit {
   Users
    
  constructor(private adminService:AdminserviceService, private route:ActivatedRoute, private location:Location ) { }

  ngOnInit() { 
   this.getStd()
   }
    
 getStd():void{
   const Standard = this.route.snapshot.paramMap.get('std')
   this.adminService.getDataStandard(Standard).subscribe(
     (res) => {   this.Users = res;
    } ) 
  }
goBack():void {
      this.location.back()
        } 
      }
