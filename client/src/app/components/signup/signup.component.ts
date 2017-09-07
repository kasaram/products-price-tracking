import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};
  
  constructor(private User: UserService) { }

  ngOnInit() {
  }

  registerUser() {
    this.User.registerUser(this.user)
      .subscribe(res => {
        console.log(res);
      });
  }

}
