import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let testObservable = interval(100);

    // testObservable.subscribe(data => {
    //   if(data%2 === 0) {
    //     console.log(data);
    //   }
    // });

    // testObservable.pipe(filter(data => data%2==0), filter(data => data%4==0)).subscribe(data => console.log(data));

    //Notes
    //1. Operators
    //2. Pipes

    //Operators - returns an observable(eg. of, fromEvent, filter)
    //Pipes - chaining of observables is done in pipes, output of 1st pipex param is passed to the next param

    //Category of Operators
    //1. Transformation
    //2. Filtering
    //3. Utility
    //4. Conditional
    //5. Aggregate
    //6. Multicast
  }

  routeToBuffer() {
    this.router.navigate(['buffer-operator-test'], {relativeTo: this.route})
  }

  routeToBufferCount() {
    this.router.navigate(['buffer-count-test'], {relativeTo: this.route})
  }

  routeToBufferTime() { 
    this.router.navigate(['buffer-time-test'], {relativeTo: this.route})
  }
}
