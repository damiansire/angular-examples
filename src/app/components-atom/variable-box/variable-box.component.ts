import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variable-box',
  standalone: true,
  imports: [],
  templateUrl: './variable-box.component.html',
  styleUrl: './variable-box.component.css',
})
export class VariableBoxComponent {
  @Input() variableName: string = '';
  @Input() variableValue: string = '';
}
