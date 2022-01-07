import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QuestionAddComponent } from 'src/app/components/questionComponents/question-add/question-add.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';
import { PostService } from 'src/app/services/post.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  postAddForm:FormGroup;
  constructor(private authenticationService:AuthenticationService,
    private messageService:MessageService,
    private routerService:RouterService,
    private formBuilder:FormBuilder,
    private postService:PostService
    ) { }

  ngOnInit(): void {
    this.createPostAddForm();
  }

  logout(){
    this.authenticationService.logout().subscribe( () =>{
      this.routerService.route("account/login");
      this.messageService.success("Oturum kapatıldı","Kimlik doğrulama Mesaj")
    });

  }

  createPostAddForm(){
    this.postAddForm = this.formBuilder.group({
      title:["",Validators.required],
      description:["",Validators.required]
    })
  }

  async addPost(){
    if (this.postAddForm.valid) {
      const {getTitle,getDescription} = this.postAddForm.value;
      (await this.postService.add(
        {
          id:Date.now().toString(),
          title:getTitle,
          description:getDescription
        })).subscribe( () =>{
          this.messageService.success(getTitle+" adlı post eklendi");
      })
    } else {
      this.messageService.error("lütfen boş geçmeyiniz");
    }
  }

}
