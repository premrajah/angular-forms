import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-angular-form-tdf',
  templateUrl: './angular-form-tdf.component.html',
  styleUrls: ['./angular-form-tdf.component.scss']
})
export class AngularFormTdfComponent implements OnInit {

  topics = ["Angular", "React", "Vue"];

  userModel = new User("", "Prem@gmail.com", 758594562, "", "morning", true);

  constructor() { }

  ngOnInit() {
  }

}
