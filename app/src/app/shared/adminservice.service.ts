import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, using } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService { 

  selectedUser : User = {
    _id:'',
    userId:'',
    fullName: '',
    email: '',
    password: '',
    DOB: '',
    Address : '',
    ParentPhone1 : '',
    ParentPhone2 : '',
    Standard :'' ,
    timestamps: ''
      }

  noAutheader = {headers: new HttpHeaders( {'NoAuthAdmin':'True'} ) }
  constructor(private http: HttpClient) { } 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
}
return throwError('Something bad happened; please try again later.');
};

  adminlogin(adminCredentials ) {
    return this.http.post(environment.apiBaseUrl+ '/adminlogin' , adminCredentials, this.noAutheader )
   }

   

  postUser(user: User) {    
    return this.http.post(environment.apiBaseUrl+'/register', user, this.noAutheader)
  }

modifyUser(id, userId, fullName, email, DOB,Address,
  ParentPhone1,ParentPhone2,Standard) { 
   const  kk =  {
    userId: userId,
    fullName: fullName ,
    email: email,
    DOB : DOB,
    Address : Address,
      ParentPhone1 : ParentPhone1,
   ParentPhone2 : ParentPhone2,
   Standard: Standard
    }

    return this.http.patch(environment.apiBaseUrl +  `/userUpdate/${id}`, kk, this.noAutheader) 
      } 

modifyTask(_id, userId, fullName,English,Matha,Hindi) { 
  const task = {
    userId: userId,
  fullName: fullName,
  English: English,
  Matha : Matha,
  Hindi : Hindi

  }
  return this.http.patch(environment.apiBaseUrl +  `/studentTask/${_id}`, task, this.noAutheader )
}

  getIndividualUser(_id) {     
    return this.http.get(environment.apiBaseUrl +  `/userData/${_id}`, this.noAutheader)
  }
  
  getIndividualByUserID(userId) {
    return this.http.get(environment.apiBaseUrl +  `/userDataUserID/${userId}`, this.noAutheader)
  }
  addTask(studentId, userId, fullName,English,Matha,Hindi ) { 
 const studentdat = {
      userId: userId,
  fullName: fullName,
  English: English,
  Matha : Matha,
  Hindi : Hindi
    }
    return this.http.post(environment.apiBaseUrl + `/studentTask/${studentId}`, studentdat, this.noAutheader)
  } 

//get task by Task Id
getTaskById(_id) {
  return this.http.get(environment.apiBaseUrl + `/useridtask/${_id}`, this.noAutheader)
}

//Get task by studnetID
getTask(taskId) {
  return this.http.get(environment.apiBaseUrl + `/studentTask/${taskId}`, this.noAutheader)
}
getDataStandard(Standard) {
  return this.http.get(environment.apiBaseUrl + `/getStd/${Standard}` , this.noAutheader) 
} 
allData() {
  return this.http.get(environment.apiBaseUrl + '/allusers' , this.noAutheader )
}

getAllTask() {
  return this.http.get(environment.apiBaseUrl + '/getAllTask' , this.noAutheader )
}
}


