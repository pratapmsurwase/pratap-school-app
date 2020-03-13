import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../shared/adminservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alltask',
  templateUrl: './alltask.component.html',
  styleUrls: ['./alltask.component.css']
})
export class AlltaskComponent implements OnInit {
users
  constructor(private adminService: AdminserviceService, private location: Location) { }

  ngOnInit() {
    
    this.gettaskAll()
  }

  gettaskAll() {
      this.adminService.getAllTask().subscribe(
      res => {
        this.users = res
         }    )
    
  } 
  goBack():void {
    this.location.back()
         }  
}
