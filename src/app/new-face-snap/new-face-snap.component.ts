import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable, tap} from "rxjs";
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapService: FaceSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    }, {updateOn: 'blur'});

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm() {
    this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
  }
}
