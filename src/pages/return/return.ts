import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-return',
  templateUrl: 'return.html',
})
export class ReturnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnPage');
  }

  returnMainPage() {
    // this.navCtrl.goToRoot({});
    this.navCtrl.setRoot(HomePage);
  }

}
