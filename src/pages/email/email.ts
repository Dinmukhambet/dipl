import {Component} from '@angular/core';
import {NavController, NavParams, normalizeURL} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer";
import {DomSanitizer} from "@angular/platform-browser";
import {File} from "@ionic-native/file";
import {Base64} from "@ionic-native/base64";
import {FilePath} from "@ionic-native/file-path";
import {StorageProvider} from "../../providers/storage/storage";


@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  currentImage;
  imageUrl;
  body: string = '';
  fileName: string;
  path: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private camera: Camera, private emailComposer: EmailComposer,
              private domSanitizer: DomSanitizer, private file: File,
              private base64: Base64, private filePath: FilePath, private storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

  setPhotoFromGallery() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    };

    this.camera.getPicture(options).then(imageData => {
      this.currentImage = imageData;
      /* //needs to import file plugin
       //split the file and the path from FILE_URI result
       let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
       this.fileName = filename;
       let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
       this.path = path;
       //then use the method readDataURL  btw. var_picture is ur image variable
       this.file.readAsDataURL(path, filename).then(res => this.imageUrl = JSON.stringify(res)).catch(err => {
         this.imageUrl = JSON.stringify(err);
       });*/

      this.filePath.resolveNativePath(this.currentImage).then(res => {
        // this.imageUrl = normalizeURL(res);
        this.base64.encodeFile(res).then((base64File: string) => {
          this.imageUrl = base64File
        }, (err) => {
          console.log(err);
        });
      })
    })


  }

  sendEmail() {
    let email: EmailComposerOptions = {
        app: 'gmail',
        to: 'dimashdim@gmail.com',
        subject: 'the showings from counter with proofs',
        body: this.body,
        attachments: [this.currentImage]
      }
    ;

    //imitation 'save history' via sending counter data
    // new Date() equals to timestamp( time at now)
    this.storageProvider.insertCounterData(this.body, new Date().toDateString());

    this.emailComposer.open(email);
  }
}
