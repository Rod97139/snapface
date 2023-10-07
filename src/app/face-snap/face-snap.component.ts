import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =  "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    this.buttonText = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.buttonText = 'Oh Snap !';
      this.snaps--;
    }
  }

}
