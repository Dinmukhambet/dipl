import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage  implements OnInit{

  history: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storageService: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.storageService.getCounterData()
      .then(res => {
        for (let i = 0; i < res.rows.length; i++) {
          this.history.push({indicator: res.rows.item(i).indicator, date: res.rows.item(i).date});
        }
      }).catch(err => console.log(err));
  }

}
