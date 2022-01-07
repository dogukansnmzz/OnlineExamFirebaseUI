import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/models/questionModels/option';
import { Question } from 'src/app/models/questionModels/question';
import { UserModel } from 'src/app/models/userModels/userModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ForwardedReplieService } from 'src/app/services/forwarded-replie.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {


  questions:Question[] = [];
  forwardedReplieForm:FormGroup;
  userModel:UserModel = {id:"",email:"",displayName:""};

  constructor(private questionService:QuestionService,
    private forwardedReplieService:ForwardedReplieService,
    private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getAll();
    this.createReplieForm();
    this.getUser();
  }
  

  async getAll(){
    (await this.questionService.getAll()).subscribe( (response) =>{
      response.forEach( (responseData) => {
        //const getOptions:Option[] = responseData.get("options")
        
        this.questions.push(
          {
            id:responseData.get("id"),
            title:responseData.get("title"),
            description:responseData.get("description"),
            time:responseData.get("time"),
            options:responseData.get("options")
          }
        )
      })
    })
  }

  getUser(){
    this.authenticationService.currentUser$.subscribe( (response) =>{
      this.userModel.id = response.uid;
      this.userModel.email = response.email;
      this.userModel.displayName = response.displayName;
    })
  }
  
  createReplieForm(){
    this.forwardedReplieForm = this.formBuilder.group({
      
      answer:["",Validators.required]
    })
  }

  async forwardedReplieAdd(getQuestionId:string){
    if (this.forwardedReplieForm.valid) {
      const forwardedReplieFormValue = Object.assign({},this.forwardedReplieForm.value);
      (await this.forwardedReplieService.add({
        id:Date.now().toString(),
        answer:forwardedReplieFormValue,
        questionId:getQuestionId,
        userId:this.userModel.id,
        email:this.userModel.email
      })).subscribe( (response) =>{
        this.messageService.success("Cevabınız gönderildi")
      } )
    } else {
      this.messageService.warning("Cevaplama işlemi yapılamdı")
    }
  }
}
