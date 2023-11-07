import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-interval-obs',
  templateUrl: './interval-obs.component.html',
  styleUrls: ['./interval-obs.component.css']
})
export class IntervalObsComponent implements OnInit {

  testSubscription!: Subscription;

  ngOnInit() {

    // // Using rxjs interval function
    // const testObservable = interval(1000);

    // this.testSubscription = testObservable.subscribe(data => {
    //   console.log(data);
    // })

    // Using custom observable
    let customObservale = new Observable(subsriber => {
      let i=0;
      let myInterval = setInterval(() => {
        i++;
        console.log("pushing data to Observable: ", i);
        subsriber.next(i)
      }, 1000)

      return() => {
        console.log("Clean Up after unsubscribe");
        clearInterval(myInterval);
      }
    })

    this.testSubscription = customObservale.subscribe(data => {
      console.log("Subscribing Observable with data: ",data);
    })
  }

  onCancel() {
    console.log("Cancelling the subscription");
    this.testSubscription.unsubscribe();
  }
}
