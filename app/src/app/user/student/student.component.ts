import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
// import { User } from 'src/app/shared/user.model';
// import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  userDetails 
  studendeDetail
 
    constructor(private user:UserService, private router: Router) { }
  
    ngOnInit() {     
       this.user.userData().subscribe(
        res => { this.userDetails = res 
         } ) 
         
     }
         
      onLogout() {
        this.user.logout().subscribe(         
        )
        this.user.delteToken()
        this.router.navigate(['/login']);
       }
}
