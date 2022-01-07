import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/postModels/post';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';
import { PostService } from 'src/app/services/post.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Post[] = [];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(){
    (await this.postService.getAll()).subscribe( (response) =>{
      response.forEach( (responseData) =>{
        this.posts.push(
          {
            id:responseData.get("id"),
            title:responseData.get("title"),
            description:responseData.get("description")
          }
        )
      })
    })
  }
  
}
