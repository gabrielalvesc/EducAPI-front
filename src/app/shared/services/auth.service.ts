import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInjector } from 'src/app/app.injector';
import { BaseService } from './base.service';

export const STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public router: Router = AppInjector.get(Router);

  constructor() {
    super();
  }

  getUser() {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  isLogged(): boolean {
    return this.getUser() !== null;
  }


  protected getToken(type: string): string | null {
    const user = this.getUser();
    if (user) {
      return this.getUser()[type];
    }
    return null;
  }

  getAccessToken(): string | null {
    return this.getToken('token');
  }

  saveToken(token: any): void {
    localStorage.setItem(STORAGE_KEY, token);
  }

  logout(redirectTo: string = '/login'): void {
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate([redirectTo]);
  }


}
