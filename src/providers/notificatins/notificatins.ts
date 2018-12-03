import {Injectable} from '@angular/core';
import {LocalNotifications} from "@ionic-native/local-notifications";

@Injectable()
export class NotificationsProvider {

  constructor(private localNotifications: LocalNotifications) {

  }

  init() {
    this.localNotifications.schedule({
      id: 1,
      text: 'privet',
      trigger: { every: {  day: 21, hour: 11, minute: 0 } },
      sound:null
    });
  }

}
