import { Injectable } from '@angular/core';
import { addNotification, removeNotification } from '../notificationActions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notifications } from '../notifications';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  timeout:number;
  notifications: Observable<Notifications[]>; 

  constructor(private store: Store<{ notifications: Notifications[] }>, userService: UserService) { 
    this.notifications = store.pipe(select('notifications')); 
    this.timeout = userService.timeout;
  } 

  success(message:string, heading:string,subHeading?: string) {
    this.getToastr('success',message,heading,subHeading);
  }

  error(message:string, heading:string,subHeading?: string) {
    this.getToastr('danger',message,heading,subHeading);
  }

  warning(message:string, heading:string,subHeading?: string) {
    this.getToastr('warning',message,heading,subHeading);
  }

  getToastr(type:string,message:string, heading:string,subHeading?: string) {
    const data = new Notifications(); 
    data.type = type;
    data.message = message;
    data.heading = heading; 
    data.subHeading = subHeading; 
    this.store.dispatch(new addNotification(data)); 
    setTimeout(() =>{
      this.store.dispatch(new removeNotification(0));
    },this.timeout);
  }
}
