import { Component, OnInit, Input } from '@angular/core';
//import { Student } from 'src/app/shared/student.model';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { UserService } from '../../../shared/user.service';
@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css']
})
export class ReportcardComponent implements OnInit {
    
    studentData 
    

  constructor(private route:ActivatedRoute, private userService:UserService, private location: Location ) { }
 
  ngOnInit() { this.onStudent()  } 

onStudent(): void {
  const userId = this.route.snapshot.paramMap.get('userId') 
   this.userService.taskData().subscribe(
  res => {   
    this.studentData = res         
  }
)

} 
goBack():void {
  this.location.back()
       }  
}
