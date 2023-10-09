import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'youremail@gmail.com';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onContinue(): void {
    this.router.navigate(['facesnaps']);
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }

}
