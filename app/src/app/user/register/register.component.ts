import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { AdminserviceService } from '../../shared/adminservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showSuccessMessage: boolean;
 serverErrorMessages: string;
  //  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private adminService:AdminserviceService) { }
  
  ngOnInit() { }

  onSubmit(form: NgForm) {
  this.adminService.postUser(form.value).subscribe(
    res => {      
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 6000) 
      this.resetForm(form)      
     
    } , 
    err => {
    if(err.status === 400) {
      this.serverErrorMessages = 'username already used'
       this.serverErrorMessages = err.error.join('<br/>')
    } 
     else 
    this.serverErrorMessages = 'Something went wrong'
    
    }
  )    } 

  resetForm(form: NgForm) {
   form.resetForm()
  this.serverErrorMessages = '';
  }



}
