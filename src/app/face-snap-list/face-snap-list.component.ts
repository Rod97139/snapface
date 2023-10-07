import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 350,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        location: "Paris"
      },
      {
        title: 'Archibald2',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        location: "Montpellier"
      },
      {
        title: 'Archibald3',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      }
    ];
  }

}
