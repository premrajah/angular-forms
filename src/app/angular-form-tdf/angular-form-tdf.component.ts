import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-angular-form-tdf',
  templateUrl: './angular-form-tdf.component.html',
  styleUrls: ['./angular-form-tdf.component.scss']
})
export class AngularFormTdfComponent implements OnInit {

  topics = ["Angular", "React", "Vue"];
  topicHasError = true;

  userModel = new User("", "Prem@gmail.com", 758594562, "default", "morning", true);

  constructor() { }

  ngOnInit() {
  }

  /// validate the select tag 
  validateTopic(value: any) {
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

}
