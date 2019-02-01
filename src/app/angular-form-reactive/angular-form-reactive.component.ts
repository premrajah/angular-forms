import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-angular-form-reactive',
  templateUrl: './angular-form-reactive.component.html',
  styleUrls: ['./angular-form-reactive.component.scss']
})
export class AngularFormReactiveComponent implements OnInit {

  registrationForm = new FormGroup({
    userName: new FormControl('Clark Kent'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      firstLine: new FormControl(''),
      city: new FormControl(''),
      county: new FormControl(''),
      postCode: new FormControl('RH10 1AB')
    })
  });

  constructor() { }

  ngOnInit() {
  }

}
