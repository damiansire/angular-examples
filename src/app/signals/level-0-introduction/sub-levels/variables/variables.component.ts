import { Component } from '@angular/core';
import { VariableBoxDrawComponent } from '../../../../components-draw/variable-box-draw/variable-box-draw.component';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [VariableBoxDrawComponent],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css',
})
export class VariablesComponent {
  dataTypes = ['Number', 'String', 'Boolean', 'Object', 'Array'];
}
