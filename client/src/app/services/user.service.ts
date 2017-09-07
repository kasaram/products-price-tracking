import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Check if user email exists
  checkUniqueEmail(email: string) {
    return this.http.post(environment.apiUrl + '/user/check', {email: email})
      .map(res => res.json());
  }

  // register the user
  registerUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      environment.apiUrl + '/auth/register',
      user,
      {headers: headers}
    ).map(res => res.json());
  }

}
