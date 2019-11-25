import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "instagram";
  ngOnInit() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAaFrHd9GRVcZj3ePRkdo8WeD-4N46GFK4",
      authDomain: "qspjsp-f137e.firebaseapp.com",
      databaseURL: "https://qspjsp-f137e.firebaseio.com",
      projectId: "qspjsp-f137e",
      storageBucket: "qspjsp-f137e.appspot.com",
      messagingSenderId: "131971811858",
      appId: "1:131971811858:web:ff5df9abbfcaeddf4426cb",
      measurementId: "G-S8RDFQ7Y1V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
