import { Injectable } from '@angular/core';
import { LoginURL } from '../url/url.domain';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AuthService {

  constructor() {
    super();
  }

  login(email: string, password: string) {
    return this.post(LoginURL.BASE, { email, password });
  }
}
