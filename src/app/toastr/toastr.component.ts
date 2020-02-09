import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from './notifications';
import { Store, select } from '@ngrx/store';
import { removeNotification } from './notificationActions';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent {

  position:string;
  maxToast:number;

  notifications: Observable<Notifications[]>;

  constructor(private store: Store<{ notifications: Notifications[] }>,userService: UserService) { 
    this.notifications = store.pipe(select('notifications')); 
    this.position = userService.positionClass;
    this.maxToast = userService.maxToast;
  }

  dismiss(key) {
    this.store.dispatch(new removeNotification(key));
  }
 
}
