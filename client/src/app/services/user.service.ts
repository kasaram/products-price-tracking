import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment as ENV } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {
  username: any;
  token: any;

  constructor(private http: Http) { }

  // Check if user email exists
  checkUniqueEmail(email: string) {
    return this.http.post(
      ENV.apiUrl + '/user/check',
      {email: email}
    ).map(res => res.json());
  }

  // register the user
  registerUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      ENV.apiUrl + '/auth/register',
      user,
      {headers: headers}
    ).map(res => res.json());
  }

  // login user
  loginUser(user: any) {
    return this.http.post(
      ENV.apiUrl + '/auth/login',
      user
    ).map(res => {
      let Response = res.json();
      if (Response.token && Response.username) {
        this.saveToken(Response.username, Response.token);
      }

      return Response;
    });
  }

  // save token to local storage
  saveToken(username: string, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    this.token = token;
    this.username = username;
  }

  // logout user
  logout() {
    this.token = null;
    this.username = null;
    localStorage.clear();
  }

  getToken() {
    let token = localStorage.getItem('token');
    this.token = token;
  }

  getUsername() {
    this.username = localStorage.getItem('username');
    return this.username;
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
