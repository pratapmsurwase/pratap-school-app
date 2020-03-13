import{HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";
import { AdminserviceService } from "../shared/adminservice.service";



@Injectable()

export class AdminInterceptor implements HttpInterceptor {
    constructor(private adminService:AdminserviceService, private router: Router , private userServise:UserService ) {}

    intercept(req: HttpRequest<any>, next:HttpHandler  ) {
       if(req.headers.get('NoAuthAdmin')) {
        const clonederq = req.clone({
            headers : req.headers.set("Authorization", "Bearer " + this.userServise.getToken())   
             })
             return next.handle(clonederq).pipe(
                 tap(
                     event => {} ,
                     err => {
                    if(err.auth == false) {
                        this.router.navigateByUrl('/admin');   
                    }
                     }
                 )
             ) 

       }
     else {
         
         return next.handle(req.clone()) 
     }       

    }
}