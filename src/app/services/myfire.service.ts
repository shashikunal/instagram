import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class MyfireService {
  constructor() {}
  getDataFromDatabase(uid) {
    const ref = firebase.database().ref("/users" + uid);
    return ref
      .once("value")
      .then(snapShot => snapShot.val())
      .catch(err => console.log(err));
  }
}
