import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: string = null;
  loading = false;
  links: any;

  constructor(private Message: MessageService,
              private User: UserService) { }

  ngOnInit() {
    this.msg = this.Message.msg;
    setTimeout(() => {
      this.msg = null;
      this.Message.msg = null;
    }, 5000);
    if (this.User.loggedIn()) {
      this.User.getLinks()
        .subscribe((res) => {
          this.links = res.links;
        });
    }
  }

}
