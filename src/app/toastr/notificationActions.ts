import {Action} from '@ngrx/store';

export enum NotificationActionTypes {
    Add = 'Add',
    Remove = 'Remove'
  }

export class notificationActions implements Action {
  readonly type;
  payload: any;
}

export class addNotification implements notificationActions {
  readonly type = NotificationActionTypes.Add;
  constructor(public payload: any) {}
}

export class removeNotification implements notificationActions {
    readonly type = NotificationActionTypes.Remove;
    constructor(public payload: any) {}
}