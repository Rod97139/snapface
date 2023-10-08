import { Component, OnInit } from '@angular/core';
import {filter, interval, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$!: Observable<string>; // <number> is the type of the value emitted by the observable
  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `Je suis ${value} et je suis pair` : `Je suis ${value} et je suis impair`),
      tap(value => this.logger(value))
    );
  }

  logger(text: string) {
    console.log('logger', text);
  }
}
