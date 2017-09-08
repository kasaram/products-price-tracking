import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: string = null;
  
  constructor(private Message: MessageService) { }

  ngOnInit() {
    this.msg = this.Message.msg;
    setTimeout(() => {
      this.msg = null;
      this.Message.msg = null;
    }, 5000);
  }

}
