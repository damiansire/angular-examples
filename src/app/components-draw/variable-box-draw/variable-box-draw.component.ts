import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-variable-box-draw',
  standalone: true,
  imports: [],
  templateUrl: './variable-box-draw.component.html',
  styleUrl: './variable-box-draw.component.css',
})
export class VariableBoxDrawComponent {
  @Input() variableName: string = '';
  @Output() onClick = new EventEmitter<{ name: string; value: string }>();

  _onClick() {
    this.onClick.emit({ name: this.variableName, value: '' });
  }
}
