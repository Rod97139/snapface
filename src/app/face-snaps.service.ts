import { Injectable } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
      {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 350,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        location: "Paris"
      },
      {
        id: 2,
        title: 'Archibald2',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        location: "Montpellier"
      },
      {
        id: 3,
        title: 'Archibald3',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      }
    ];

    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    getFaceSnapById(id: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(
        (faceSnap) => {
          return faceSnap.id === id;
        });

      if (!faceSnap) {
        throw new Error('FaceSnap not found');
      }else {
        return faceSnap;
      }
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unSnap'): void {
      const faceSnap = this.getFaceSnapById(id);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}
