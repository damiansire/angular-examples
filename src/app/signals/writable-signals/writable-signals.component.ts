import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signals',
  standalone: true,
  imports: [],
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css',
})
export class WritableSignalsComponent {
  count = signal(0);
  ngOnInit() {
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.count());
    this.count.set(3);
    // Increment the count by 1.
  }
  update() {
    this.count.update((value) => value + 1);
    console.log(this.count());
  }
}
