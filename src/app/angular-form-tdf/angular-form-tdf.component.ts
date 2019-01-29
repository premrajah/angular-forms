import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form-tdf',
  templateUrl: './angular-form-tdf.component.html',
  styleUrls: ['./angular-form-tdf.component.scss']
})
export class AngularFormTdfComponent implements OnInit {

  topics = ["Angular", "React", "Vue"];

  constructor() { }

  ngOnInit() {
  }

}
