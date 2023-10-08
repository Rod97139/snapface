import { Component, OnInit } from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$!: Observable<number>; // <number> is the type of the value emitted by the observable
  ngOnInit() {
    this.interval$ = interval(1000);
    // setTimeout(() => this.interval$.subscribe( value => console.log(value)), 3000);
  }
}
