import {notificationActions, NotificationActionTypes} from './notificationActions';

export const initialState = [];

export function NotificationReducer(state = initialState, action: notificationActions) {
  switch (action.type) {
    case NotificationActionTypes.Add:
      return [...state, action.payload];
    case NotificationActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}