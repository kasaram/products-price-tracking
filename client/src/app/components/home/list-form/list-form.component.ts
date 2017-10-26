import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  link: any = {};
  error = false;
  @Output() linkAdded = new EventEmitter();

  constructor(private User: UserService) { }

  ngOnInit() {
  }

  addLink(): void {
    this.parseLink();
    if (!this.error) {
      this.User.postLink(this.link)
        .subscribe(res => {
          console.log(res);
          this.linkAdded.emit(res.link);
        }, err => {
          console.log(err);
        });
    }
  }

  parseLink(): void {
    const domainRe = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
    const idRe = /^(?:https?:\/\/[^\/]*\/)(.*)/;
    const domain = this.link.url.match(domainRe);
    const productId = this.link.url.match(idRe);
    if (domain && productId) {
      this.error = false;
      this.link.store = domain[1];
      this.link.productId = productId[1];
    } else {
      this.error = true;
    }
  }

}
