import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() onClick: any = new EventEmitter<void>();
  @Input() text: string = 'Missing text';

  callClick() {
    this.onClick.emit('emitido');
  }
}
