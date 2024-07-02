import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-update-signal',
  standalone: true,
  imports: [],
  templateUrl: './update-signal.component.html',
  styleUrl: './update-signal.component.css',
})
export class UpdateSignalComponent {
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
