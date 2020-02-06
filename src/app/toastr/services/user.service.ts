import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  positionClass:any = 'toast-top-right';
  timeout:number = 5000;
  maxToast:number = 5;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _positionClass;
  private _timeout:number;
  private _maxToast:number;

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._positionClass = config.positionClass; this._timeout = config.timeout;this._maxToast = config.maxToast }
  }

  get positionClass() {
    return this._positionClass;
  }

  get timeout() {
    return this._timeout;
  }

  get maxToast() {
    return this._maxToast;
  }
}