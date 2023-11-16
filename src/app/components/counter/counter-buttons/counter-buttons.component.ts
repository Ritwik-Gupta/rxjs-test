import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  @Output() buttonEvent: EventEmitter<string> = new EventEmitter();

  onIncrement() {
    this.buttonEvent.emit("increment");
  }

  onDecrement() {
    this.buttonEvent.emit("decrement");
  }
}
