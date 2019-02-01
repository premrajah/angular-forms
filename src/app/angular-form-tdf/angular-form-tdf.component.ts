import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-angular-form-tdf',
  templateUrl: './angular-form-tdf.component.html',
  styleUrls: ['./angular-form-tdf.component.scss']
})
export class AngularFormTdfComponent implements OnInit {

  topics = ["Angular", "React", "Vue"];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User("", "Prem@gmail.com", 758594562, "default", "morning", true);

  constructor(private _enrollmentService: EnrollmentService) { }

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

  /// from submit 
  onSubmit() {
    this.submitted = true; // to check if form is submitted
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        // error => console.log('Error!', error)
        error => this.errorMsg = error.statusText
      )
      
  }
  

}
