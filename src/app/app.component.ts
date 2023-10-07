import { Component } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      location: "Paris"
    };
    this.mySnap2 = {
      title: 'Archibald2',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      location: "Montpellier"
    };
    this.mySnap3 = {
      title: 'Archibald3',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    };

  }
}
