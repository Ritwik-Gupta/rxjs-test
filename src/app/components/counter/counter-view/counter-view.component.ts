import { Component, Input, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.css']
})
export class CounterViewComponent implements OnInit{
  @Input() counter: number = 0;

  ngOnInit(): void {

  }
}
