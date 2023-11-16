import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-service',
  templateUrl: './counter-service.component.html',
  styleUrls: ['./counter-service.component.css']
})
export class CounterServiceComponent {

  counter$: Observable<number> = new Observable(subscriber => subscriber.next(0));
  

}
