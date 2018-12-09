import {Injectable} from '@angular/core';
import {LocalNotifications} from "@ionic-native/local-notifications";

@Injectable()
export class NotificationsProvider {

  constructor(private localNotifications: LocalNotifications) {

  }

  init() {
    this.localNotifications.schedule({
      id: 1,
      text: 'You should to pay check off',
      sound:null
    });
  }

}
