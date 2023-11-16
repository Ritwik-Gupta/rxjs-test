import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-from-scratch',
  templateUrl: './observable-from-scratch.component.html',
})
export class ObservableFromScratchComponent implements OnInit{


  testObservable = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.next(4)
    subscriber.next(5)
    console.log("waiting for 3 secs")
    setTimeout(() => {
      subscriber.next(6)
    }, 3000)
    // subscriber.complete()
    // subscriber.error("Some random error")
  });

  testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved")
    }, 2000);
  })

  promiseObservable$ = from(this.testPromise);

  observer = {
    next: (data:any)=> {
      console.log(data)
    },
    error: (error:any)=> {
      console.log(error)
    },
    complete: ()=> {
      console.log("completed")
    }
  }


  ngOnInit(): void {
    this.testObservable.subscribe(this.observer)
    this.promiseObservable$.subscribe(this.observer)
  }

}
