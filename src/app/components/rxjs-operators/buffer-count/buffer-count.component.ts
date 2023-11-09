import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs'
import { bufferCount, } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  testObservable$ = of(1,2,3,4,5,6,7);
  testIntervalObs$ = interval(1000);

  numbers: number[] = [];

  ngOnInit(): void {
    // this.testObservable$.subscribe(data => console.log(data));
    // this.testObservable$.pipe(bufferCount(2,2)).subscribe(data => console.log(data));
    this.testIntervalObs$.pipe(bufferCount(5,4)).subscribe(data => console.log(data));
    this.testIntervalObs$.subscribe(data => this.numbers.push(data))
  }

}
