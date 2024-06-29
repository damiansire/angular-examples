import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signals',
  standalone: true,
  imports: [],
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css',
})
export class WritableSignalsComponent {
  count = signal(0);
  @ViewChild('signalSetInput') myInput!: ElementRef<HTMLInputElement>;
  ngOnInit() {
    console.log('The count is: ' + this.count());
  }
  update() {
    this.count.update((value) => value + 1);
    console.log(this.count());
  }
  setValue() {
    const inputValue = parseInt(this.myInput.nativeElement.value, 10);
    if (!isNaN(inputValue)) {
      this.count.set(inputValue);
    }
  }
}
