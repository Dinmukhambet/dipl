import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Platform} from "ionic-angular";

@Injectable()
export class StorageProvider {
  database: SQLiteObject;


  constructor(public http: HttpClient, private sqlite: SQLite,platform:Platform) {
    platform.ready().then(() => {
      this.createdDb();
    });
  }

  createdDb() {
    this.sqlite.create({
      name: 'electricity.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database = db;

        /**
         * table for user auth |imitation
         */
        db.executeSql('create table if not exists users(fullName TEXT,user_id INTEGER,password TEXT)', [])
          .then(() => console.log('created table users'))
          .catch(e => console.log(e));

        /**
         *for history of meter reading
         */
        db.executeSql('create table if not exists history(indicator TEXT,date TEXT)', [])
          .then(() => console.log('created table history'))
          .catch(e => console.log(e));


      })
      .catch(e => console.log(e));
  }

  createUser(user: User) {
    this.database.executeSql("INSERT INTO users (fullName, user_id, password) VALUES (?,?,?)",
      [user.fullName, user.userId, user.password])
      .then(res => {
        alert(res.insertId);
      }).catch(err => {
      console.log(err)
    });
  }

  getAllUsers(credentials:Credential) {
    this.database.executeSql("SELECT *  FROM users", []).then(res => {
      alert(JSON.stringify(res.rows.item(1)));
      for (var i=0;i<res.rows.length;i++) {
        let user:User=res.rows.item(i);
        if (user.userId === credentials.userId && user.password === credentials.password) {
          alert(JSON.stringify(credentials));
        }
      }
    });
  }

}

export class User {
  fullName: string;
  userId: number;
  password: string;
}
export class Credential {
  userId: number;
  password: string;
}
