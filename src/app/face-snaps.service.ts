import { Injectable } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient) { }

    private faceSnaps: FaceSnap[] = []

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
    }

    getFaceSnapById(id: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/faceSnaps/${id}`);
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unSnap'): void {
      // const faceSnap = this.getFaceSnapById(id);
      // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
      const faceSnap: FaceSnap = {
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: this.faceSnaps.length + 1
      }
      this.faceSnaps.push(faceSnap);
    }
}
