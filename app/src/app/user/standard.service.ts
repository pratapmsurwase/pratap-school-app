import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
;
// import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandardService { 
  
  // selectedUser : User = {
  //   _id:'',
  //   userId:'',
  //   fullName: '',
  //   email: '',
  //   password: '',
  //   DOB: '',
  //   Address : '',
  //   ParentPhone1 : '',
  //   ParentPhone2 : '',
  //   Standard :'' 
   
  //     }

  constructor(private http:HttpClient) {
    
   }  
  // let headers = new HttpHeaders()
  // .append('Content-Type' , 'application/json');

  
updateUser(user: User) { 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  return this.http.put(environment.apiBaseUrl+'/userUpdate', user, httpOptions )
}
}
