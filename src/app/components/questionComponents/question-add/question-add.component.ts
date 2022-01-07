import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  questionAddForm:FormGroup;

  optionsCount:number[] = [
    1,2,3,4
  ];


  inputOptionNameOne:string;
  inputOptionValueOne:string;
  
  inputOptionNameTwo:string;
  inputOptionValueTwo:string;
  
  inputOptionNameThree:string;
  inputOptionValueThree:string;

  inputOptionNameFour:string;
  inputOptionValueFour:string;

  inputOptionNameFive:string;
  inputOptionValueFive:string;

  constructor(private formBuilder:FormBuilder,
    private questionService:QuestionService,
    private messageService:MessageService,
    private routerService:RouterService) { }

  ngOnInit(): void {
    this.createQuestionAddForm();
  }


  createQuestionAddForm(){
    this.questionAddForm = this.formBuilder.group({
      title:["",Validators.required],
      description:["",Validators.required],
      time:["",Validators.required]
    })
  }

  

  async add(){
    if (this.questionAddForm.valid) {
      let questionAddModel = Object.assign({},this.questionAddForm.value);
      (await this.questionService.add(
        {
          id:Date.now().toString(),
          title:questionAddModel.title,
          description:questionAddModel.description,
          time:questionAddModel.time.toString(),
          options:[
            // {id:"1",optionName:this.inputOptionNameOne,value:this.inputOptionValueOne},
            // {id:"2",optionName:this.inputOptionNameTwo,value:this.inputOptionValueTwo},
            // {id:"3",optionName:this.inputOptionNameThree,value:this.inputOptionValueThree},
            // {id:"4",optionName:this.inputOptionNameFour,value:this.inputOptionValueFour},
            // {id:"5",optionName:this.inputOptionNameFive,value:this.inputOptionValueFive}
            this.inputOptionValueOne,
            this.inputOptionValueTwo,
            this.inputOptionValueThree,
            this.inputOptionValueFour,
            this.inputOptionValueFive
          ]
        }
      )).subscribe((response)=>{
        this.routerService.route("admin/panel");
        this.messageService.success("Soru başarıyla eklendi")
        
      })
    } else {
      this.messageService.error("Lütfen bilgileri boş geçmeyin")
    }
  }

}
