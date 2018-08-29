import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDsL6CaHz6Ll7F6eXNv0rnVelUuRU-jBGk",
    authDomain: "ng-recipe-book-6859c.firebaseapp.com"
    });
  }
}
