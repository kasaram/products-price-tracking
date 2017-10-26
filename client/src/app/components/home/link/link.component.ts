import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() link;

  constructor() { }

  ngOnInit() {
    if (this.link) {
      this.link.url = `https://www.${this.link.store}/${this.link.productId}`;
    }
  }

}
