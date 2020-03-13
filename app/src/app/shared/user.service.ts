import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, pipe, throwError} from 'rxjs';
import { Divison } from '../divison/brach';
import { STD } from '../divison/divison';
import { StudentD } from './student-d';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
//  inddata: StudentD = { 
//     _id:'',
//   userId:'',
//   fullName: '',
//   email: '',
//    DOB: '',
//   Address : '',
//   ParentPhone1 : '',
//  }
  
  

    
     studentData: Student = {
      
      userId: '',
      fullName : '',
      DateAt: '',
      English: '',
      Matha: '',
      Hindi : ''
     }
     

  noAutheader = {headers: new HttpHeaders( {'NoAuth':'True'} ) }
  constructor(private http: HttpClient ) { }

  
 
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

//  stData(student: Student ) {
//   return this.http.post(environment.apiBaseUrl+ '/DataOfStudent', student)
//  }


 //HTTP methods working as per new code
 login(authCredentials) {
   return this.http.post(environment.apiBaseUrl + '/login', authCredentials,this.noAutheader)
 }
logout() {
  return this.http.post(environment.apiBaseUrl + '/logoutAll', this.noAutheader)
}
 //HTTP methods working as per new code
 userData() {
   return this.http.get(environment.apiBaseUrl + '/users/me', this.noAutheader)
 }

 //HTTP methods working as per new code
taskData() {
  return this.http.get(environment.apiBaseUrl + '/studentTask' )
} 

getnewStandard(): Observable<Divison[]> {
  return of(STD)
  }

//Helper Methods
 setToken(token: string) {
localStorage.setItem('token', token)
 }

getToken() {
  return localStorage.getItem('token')
}

delteToken() {
  localStorage.removeItem('token')
}

getUserPayload() {
  var token = this.getToken()
  if(token) {
    var userPayload = atob(token.split('.')[1])
    return JSON.parse(userPayload)
  } else {
    return null;
  }
}

isLoggedIn() {
  var userPayload = this.getUserPayload()
  if(userPayload) {
    return userPayload.exp > Date.now() / 1000;
     } else {
       false
     }
   }
}
