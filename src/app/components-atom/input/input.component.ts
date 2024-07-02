import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() text: string = '';
  @Input() placeholder: string = '';
  @Output() onChangeEvent = new EventEmitter<string>();

  sendData(event: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.onChangeEvent.emit(inputValue);
  }
}
