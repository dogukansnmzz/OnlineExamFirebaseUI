import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  defaultRoute(){
    return this.router.navigate(["/"]);
  }
  route(routerLink:string){
    return this.router.navigate(['/' + routerLink.toLocaleLowerCase().trim()]);
  }

}
