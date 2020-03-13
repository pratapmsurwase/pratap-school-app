import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/shared/user.model';
import { UserService } from '../../shared/user.service';
import { Divison } from '../../divison/brach';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Divison } from 'src/app/divison/STD';


@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  std: Divison[] =[]
  
  
   User:any
   
  // div = '7D'
  constructor(private userService:UserService, private router: Router, private location:Location) {   }

  ngOnInit() {
    this.onResult() 
   }  
  onResult():void { 
        // this.userService.getStandard(this.div).subscribe(
    //   (res) => {
    //    this.User = res 
    //    console.log(this.User)
    //    } )
   this.userService.getnewStandard().subscribe(
     (std => {
      this.std=std
      // console.log(this.std)
        } ) )
         } 

         goBack():void {
          this.location.back()
              } 
}
