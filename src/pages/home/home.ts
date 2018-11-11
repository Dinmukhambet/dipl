import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Credential, StorageProvider, User} from "../../providers/storage/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  user: User = new User();
  creadential:Credential = new Credential();
  tmp:string;

  constructor(public navCtrl: NavController,private storageService:StorageProvider,private platform:Platform) {
  }

  ngOnInit(): void {
  }

  regUser() {
    this.storageService.createUser(this.user);

  }
  loginUser() {
    this.storageService.getAllUsers(this.creadential);

  }




}
