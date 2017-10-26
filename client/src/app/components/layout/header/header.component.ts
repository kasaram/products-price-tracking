import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public User: UserService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.User.oauthPopup((code: string) => {
      this.User.loginFacebook(code)
        .subscribe(res => {
          console.log(res);
        });
    });
  }

}
