import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public User: UserService,
              private Msg: MessageService) { }

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
