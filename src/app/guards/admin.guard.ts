import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { MessageService } from '../services/message.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  private isActive:boolean = false;

  private readonly userId:string = "Ecb24uRrN9bhN0aH8IV93REbG1K2";
  constructor(private authenticationService:AuthenticationService,
    private messageService:MessageService,
    private routerService:RouterService) {
    this.getUser();
  }

  getUser(){
    
    this.authenticationService.currentUser$.subscribe( (response) =>{
      if (response.uid === this.userId) {        
        this.isActive = true;
        this.messageService.success("Yönlendiriyorsunuz")  
      } else {
        this.isActive = false;
        this.messageService.error("Lütfen Yönetici olduğunuzu doğrulayın!")
      }
    })

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     

      return this.isActive;
  }
  
}
