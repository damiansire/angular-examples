import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variable-box-draw',
  standalone: true,
  imports: [],
  templateUrl: './variable-box-draw.component.html',
  styleUrl: './variable-box-draw.component.css',
})
export class VariableBoxDrawComponent {
  @Input() variableName: string = '';
}
