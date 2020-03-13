import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../shared/adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user
  // imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
  imageadd =  'https://image.flaticon.com/icons/png/512/295/295128.png'
  serverErrorMessages: String
  serverSuccess: String
  constructor(private adminService:AdminserviceService, private userService:UserService, private router: Router ) { }
  model = {
     email : '',
    password:''
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.adminService.adminlogin(form.value).subscribe( 
      res=> { 
      this.user = res
       this.userService.setToken(res['token'])
      this.router.navigateByUrl('/studentdata');
      
    },
    err => {
      this.serverErrorMessages = err.error.message
    } 
  
    )
   }

}
