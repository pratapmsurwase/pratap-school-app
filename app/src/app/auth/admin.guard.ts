import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate { 
  constructor(private userservice:UserService, private router:Router) {}  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { 
  
      if(!this.userservice.isLoggedIn()) {
        this.router.navigateByUrl('/admin');
        this.userservice.delteToken();
        return false;
      }
      return true;
    }
  }

  

