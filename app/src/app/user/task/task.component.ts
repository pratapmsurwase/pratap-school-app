import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../../shared/adminservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 _id
  constructor(private route:ActivatedRoute, private adminService:AdminserviceService, private location:Location) { }

  ngOnInit() { 
    const kk = this.route.snapshot.paramMap.get('_id') 
    this._id = kk
    console.log('the iD is ', this._id)
  }

}
