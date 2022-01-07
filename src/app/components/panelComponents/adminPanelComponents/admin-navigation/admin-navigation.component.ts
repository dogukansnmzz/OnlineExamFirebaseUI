import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionAddComponent } from 'src/app/components/questionComponents/question-add/question-add.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  getUser$ = this.authenticationService.currentUser$;

  constructor(private authenticationService:AuthenticationService,
    private dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openQuestionAddDialog(){
    this.dialog.open(QuestionAddComponent);
  }
  
}
