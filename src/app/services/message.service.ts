import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private toastrCloseButtonConfig:boolean = true;
  private toastrProgressBarConfig:boolean = true;
  private toastrExtendedTimeOutConfig:number = 1500;
  private toastrPositionClassConfig:string = "toast-top-full-width";
  private toastrTimeOutConfig:number = 6000;


  constructor(private toastrService:ToastrService) { }


  warning(message:string,title?:string){
    this.toastrService.warning(message,title,
      {
        closeButton:this.toastrCloseButtonConfig,
        positionClass:this.toastrPositionClassConfig,
        progressBar:this.toastrProgressBarConfig,
        extendedTimeOut:this.toastrExtendedTimeOutConfig,
        timeOut:this.toastrTimeOutConfig,        
        progressAnimation:'decreasing'
      })
  }

  error(message:string,title?:string){
    this.toastrService.error(message,title,
      {
        closeButton:this.toastrCloseButtonConfig,
        positionClass:this.toastrPositionClassConfig,
        progressBar:this.toastrProgressBarConfig,
        extendedTimeOut:this.toastrExtendedTimeOutConfig,
        timeOut:this.toastrTimeOutConfig,
        progressAnimation:'decreasing'
      })
  }

  success(message:string,title?:string){
    this.toastrService.success(message,title,
      {
        closeButton:this.toastrCloseButtonConfig,
        positionClass:this.toastrPositionClassConfig,
        progressBar:this.toastrProgressBarConfig,
        extendedTimeOut:this.toastrExtendedTimeOutConfig,
        timeOut:this.toastrTimeOutConfig,
        progressAnimation:'decreasing'
      })
  }
}
