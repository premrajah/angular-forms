import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  /// post method
  enroll(user: User) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.ErrorHandler)); // catch errors
  }

  ErrorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
