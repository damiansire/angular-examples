import { Component, Input } from '@angular/core';
import { VariableBoxDrawComponent } from '../variable-box-draw/variable-box-draw.component';

@Component({
  selector: 'app-container-variable-box-draw',
  standalone: true,
  imports: [VariableBoxDrawComponent],
  templateUrl: './container-variable-box-draw.component.html',
  styleUrl: './container-variable-box-draw.component.css',
})
export class ContainerVariableBoxDrawComponent {
  @Input() variableName: string = '';
}
