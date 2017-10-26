import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private User: UserService) {}

  canActivate() {
    if (this.User.loggedIn()) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
