import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

}
