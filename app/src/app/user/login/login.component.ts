import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user
  imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
  serverErrorMessages: String
  constructor(public userService:UserService, private router: Router) { } 
  model = {
    userId:'',
    // // email : '',
    password:''
  }
 
  // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() { 
    // if(this.userService.isLoggedIn()) 
    //  this.router.navigateByUrl('/studentdata/student');
   }
 onSubmit(form: NgForm) {
  this.userService.login(form.value).subscribe( 
    res=> { 
    // this.user = res
    // console.log(res)
     this.userService.setToken(res['token'])
    this.router.navigateByUrl('/student'); //StudentComponent
    
  },
  err => {
    this.serverErrorMessages = err.error.message
  }
  )
 }

}
