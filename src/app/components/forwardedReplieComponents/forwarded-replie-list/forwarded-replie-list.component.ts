import { Component, OnInit } from '@angular/core';
import { ForwardedReplie } from 'src/app/models/forwardedReplieModels/forwardedReplie';
import { ForwardedReplieService } from 'src/app/services/forwarded-replie.service';

@Component({
  selector: 'app-forwarded-replie-list',
  templateUrl: './forwarded-replie-list.component.html',
  styleUrls: ['./forwarded-replie-list.component.css']
})
export class ForwardedReplieListComponent implements OnInit {

  forwardedReplies:ForwardedReplie[] = [];

  constructor(private forwardedReplieService:ForwardedReplieService) { }

  ngOnInit(): void {
    this.getAll()
  }

  async getAll(){
    (await this.forwardedReplieService.getAll()).subscribe( (response) =>{
      response.forEach( (responseData) =>{
        console.log(responseData.get("answer.answer"))
        this.forwardedReplies.push(
          {
            id:responseData.get("id"),
            questionId:responseData.get("questionId"),
            userId:responseData.get("userId"),
            email:responseData.get("email"),
            answer:responseData.get("answer.answer")
          }
        )
      })
    } )
  }
}
