import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../shared/adminservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-allstudnet',
  templateUrl: './allstudnet.component.html',
  styleUrls: ['./allstudnet.component.css']
})
export class AllstudnetComponent implements OnInit { 
users

  constructor(public adminService: AdminserviceService, private location: Location) { }

  ngOnInit() { 
    
    this.getData()
  }
  getData()  {
   this.adminService.allData().subscribe(
     res => {
      this.users = res 
          }      
   ) }

   goBack():void {
    this.location.back()
         }  
}
