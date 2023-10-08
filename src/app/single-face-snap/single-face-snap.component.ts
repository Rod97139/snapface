import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../face-snaps.service";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService ) {
  }

  ngOnInit() {
    this.buttonText = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.buttonText = 'Oh Snap !';
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
    }
  }
}

