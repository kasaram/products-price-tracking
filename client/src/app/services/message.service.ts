import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {
  public msg: any = null;
  loggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

}
