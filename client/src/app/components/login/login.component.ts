import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  error: any = null;
  msg: any = null;
  @ViewChild('userForm') form: NgForm;
  
  constructor(
    private User: UserService,
    private router: Router,
    private Message: MessageService
  ) { }

  ngOnInit() {
    this.msg = this.Message.msg;
    setTimeout(() => {
      this.msg = null;
      this.Message.msg = null;
    }, 5000);
    this.form.valueChanges.subscribe(val => {
      this.error = null;
    });
  }

  loginUser() {
    this.User.loginUser(this.user)
      .subscribe(res => {
        console.log(res);
        this.Message.msg = res.msg;
        this.router.navigate(['']);
      }, err => {
        console.log(err.json());
        this.error = err.json();
      });
  }

}
