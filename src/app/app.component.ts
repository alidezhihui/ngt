import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  counter = 1;

  increment() {
    this.counter++;
    console.log("clicked")
  }
}
