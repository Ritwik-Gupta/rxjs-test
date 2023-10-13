import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-from-scratch',
  templateUrl: './observable-from-scratch.component.html',
  styleUrls: ['./observable-from-scratch.component.css']
})
export class ObservableFromScratchComponent implements OnInit{

  // myObservable = new Observable<number>((observer) => {
  //   observer.next(1)
  //   observer.next(2)
  //   observer.next(3)
  //   observer.next(4)
  // });

  myObservable = new Observable<number>((observer) => {
    for(let i=0; i<5; i++) {
      setTimeout(() => observer.next(i), 1000)
    }
  });

  myObserver = {
    next: (next: number) => console.log(next),
    error: (error: string) => console.log(error),
    complete: () => console.log("Done")
  }

  ngOnInit(): void {
    this.myObservable.subscribe(this.myObserver);
  }


}
