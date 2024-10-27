import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sliders-control-buttons',
  standalone: true,
  imports: [],
  templateUrl: './sliders-control-buttons.component.html',
  styleUrl: './sliders-control-buttons.component.css',
})
export class SlidersControlButtonsComponent {
  sliderNumber = 0;

  @Output() sliderChanged = new EventEmitter<number>();

  nextSlider() {
    this.sliderNumber++;
    this.sliderNumber = this.sliderNumber % 4;
    this.sliderChanged.emit(this.sliderNumber);
  }
  beforeSlider() {
    this.sliderNumber--;
    if (this.sliderNumber === -1) {
      this.sliderNumber = 3;
    }
    this.sliderChanged.emit(this.sliderNumber);
  }
}
