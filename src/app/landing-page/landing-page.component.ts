import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'youremail@google.com';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onContinue(): void {
    this.router.navigate(['facesnaps']);
  }

  onSubmitForm(): void {
    console.log(this.userEmail);
  }

}
