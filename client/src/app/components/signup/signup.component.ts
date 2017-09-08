import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};
  
  constructor(
    private User: UserService,
    private router: Router,
    private Message: MessageService
  ) { }

  ngOnInit() {
  }

  registerUser() {
    this.User.registerUser(this.user)
      .subscribe(res => {
        console.log(res);
        this.Message.msg = res.msg;
        this.router.navigate(['/auth/login']);
      });
  }

}
