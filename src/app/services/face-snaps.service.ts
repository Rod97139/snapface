import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

    private faceSnaps: FaceSnap[] = []

    constructor(private http: HttpClient) { }


    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
    }

    getFaceSnapById(id: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/faceSnaps/${id}`);
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unSnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(id).pipe(map(facesnap => ({
        ...facesnap,
        snaps: snapType === 'snap' ? facesnap.snaps + 1 : facesnap.snaps - 1
      })), switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/faceSnaps/${id}`, updatedFaceSnap)))
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
        map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
        map(previousFaceSnap => ({
          ...formValue,
          snaps: 0,
          createdAt: new Date(),
          id: previousFaceSnap.id + 1
        })),
        switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/faceSnaps', newFaceSnap))
      );

    }
}
