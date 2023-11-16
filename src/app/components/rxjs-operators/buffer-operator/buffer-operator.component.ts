import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, buffer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css']
})
export class BufferOperatorComponent implements OnInit, AfterViewInit{

  numbers: Array<number> = [];
  clickEvent$!: Observable<Event>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let testInterval = interval(1000);

    // testInterval.subscribe(data => this.numbers.push(data));
    let element = document.getElementById("print-buffer")!;

    this.clickEvent$ = fromEvent(element, 'click')

    testInterval.pipe(buffer(this.clickEvent$)).subscribe(data => this.numbers.push(...data));


  }
}
