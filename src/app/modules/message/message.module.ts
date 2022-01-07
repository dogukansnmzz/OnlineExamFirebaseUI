import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

const messageModules = [
  ToastrModule.forRoot()
]

@NgModule({
  exports:[messageModules],
  imports: [
    messageModules
  ]
})
export class MessageModule { }
