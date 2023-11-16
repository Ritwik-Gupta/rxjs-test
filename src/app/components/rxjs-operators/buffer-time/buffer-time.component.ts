import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { bufferTime } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {

  numbers = of(1,2,3,4,5,6,7)
  testInterval$ = interval(500);

  ngOnInit() {
    // this.numbers.pipe(bufferTime(500)).subscribe(data => console.log(data));
    this.testInterval$.pipe(bufferTime(1000)).subscribe(data => console.log(data));
  }

}
