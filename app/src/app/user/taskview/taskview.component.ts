import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../../shared/adminservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
   tasks
  constructor(private route:ActivatedRoute, private adminService:AdminserviceService, private location:Location) { }
  
  ngOnInit() { 
    const myid = this.route.snapshot.paramMap.get('_id') 
    console.log('the iD is ', myid)
    this.adminService.getTask(myid).subscribe(
      res => {
     this.tasks= res 
     console.log(this.tasks)
        }
    )
  }

  goBack():void {
    this.location.back()
        }   
}
