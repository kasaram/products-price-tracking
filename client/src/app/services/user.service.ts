import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment as ENV } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { MessageService } from './message.service';

@Injectable()
export class UserService {
  username: any;
  token: any;
  code: string;
  headers = new Headers();

  constructor(private http: Http,
              private Msg: MessageService) {
  }

  setHeaders(): void {
    const token = this.token || this.getToken();
    this.headers.append('Authorization', `JWT ${token}`);
  }

  // Check if user email exists
  checkUniqueEmail(email: string): any {
    return this.http.post(
      ENV.apiUrl + '/user/check',
      {email: email}
    ).map(res => res.json());
  }

  // register the user
  registerUser(user: any): any {
    return this.http.post(
      ENV.apiUrl + '/auth/register',
      user
    ).map(res => res.json());
  }

  // login user normal
  loginUser(user: any): any {
    return this.http.post(
      ENV.apiUrl + '/auth/login',
      user
    ).map(res => {
      const Response = res.json();
      const { token, username } = Response;
      if (token && username) {
        this.saveToken(Response.username, Response.token);
      }
      return Response;
    });
  }

  loginFacebook(code: string): any {
    const encodedCode = encodeURIComponent(code);
    return this.http.get(`${ENV.apiUrl}/auth/facebook/callback?code=${encodedCode}`)
      .map(res => {
        const Response = res.json();
        const { token, username } = Response;
        if (token && username) {
          this.saveToken(Response.username, Response.token);
        }
        return Response;
      });
  }

  oauthPopup(callback: Function): void {
    const url = `https://www.facebook.com/v2.10/dialog/oauth?client_id=${ENV.clientId}&redirect_uri=${ENV.redirectUri}`;
    const win = window.open(url, 'Facebook Auth', 'width=600,height=700');
    const interval = setInterval(() => {
      try {
        if (win.location.origin === ENV.redirectUri) {
          this.code = (win.location.href).split('code=')[1];
          clearInterval(interval);
          callback(this.code);
          win.close();
        }
      } catch (e) {}
    }, 100);
  }

  getLinks(): any {
    this.setHeaders();
    return this.http.get(`${ENV.apiUrl}/links`, {headers: this.headers})
      .map(res => res.json());
  }

  postLink(link): any {
    this.setHeaders();
    return this.http.post(`${ENV.apiUrl}/links`, link, {headers: this.headers})
      .map(res => res.json());
  }

  // save token to local storage
  saveToken(username: string, token: string) {
    this.token = token;
    this.username = username;
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    this.Msg.loggedIn.emit(true);
  }

  // logout user
  logout() {
    this.token = null;
    this.username = null;
    localStorage.clear();
    this.Msg.loggedIn.emit(false);
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  getUsername() {
    this.username = localStorage.getItem('username');
    return this.username;
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
