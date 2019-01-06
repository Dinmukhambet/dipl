import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {

  isIndividualEntity: boolean = false;

  legalPersonCoef = 16.01;
  individualCoef = 12.77;

  energyCount: number = 0;

  sum: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  /*check() {
    return this.isIndividualEntity ? this.legalPersonCoef : this.individualCoef;
  }*/

  summarize() {
    this.sum = this.energyCount * (this.isIndividualEntity ? this.legalPersonCoef : this.individualCoef);
  }


}
