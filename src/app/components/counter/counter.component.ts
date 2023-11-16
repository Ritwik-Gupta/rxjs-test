import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter: number = 0;

  onButtonEventEmitted(event: any) {
    if(event == "increment") {this.counter++}
    else if(event == "decrement") {this.counter--}
  }
}
