import { Component } from '@angular/core';

@Component({
  selector: 'mfe1-app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter = 0;

  handleCounter() {
    this.counter += 1;
  }
}
