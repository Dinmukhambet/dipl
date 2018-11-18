import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Credential, StorageProvider, User} from "../../providers/storage/storage";
import {WelcomePage} from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  user: User = new User();
  creadential: Credential = new Credential();
  tmp: string;

  constructor(public navCtrl: NavController, private storageService: StorageProvider, private platform: Platform) {
  }

  ngOnInit(): void {
  }

  regUser() {
    this.storageService.createUser(this.user);

  }

  loginUser() {
    function hasUser(res) {
      return res.rows.item(0).exist === 1;
    }

    this.storageService.getAllUsers(this.creadential).then(res => {

      if (hasUser(res)) {
        this.navCtrl.push(WelcomePage);
      }

    }).catch(err => {
      alert('rejected');
    });


  }


}
