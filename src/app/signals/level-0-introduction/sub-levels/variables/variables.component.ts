import { Component, computed, signal } from '@angular/core';
import { VariableBoxDrawComponent } from '../../../../components-draw/variable-box-draw/variable-box-draw.component';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [VariableBoxDrawComponent, CodeComponent],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css',
})
export class VariablesComponent {
  dataTypes = ['Number', 'String', 'Boolean', 'Object', 'Array'];
  numberValues = ['1', '6', '56', '5.4', '10.1'];
  selectedValue = signal('1');
  lines = computed<CodeLine[]>(() => [
    { line: `var value = ${this.selectedValue()}`, active: false },
    { line: `const value = ${this.selectedValue()}`, active: false },
    { line: `let value = ${this.selectedValue()}`, active: false },
  ]);
  setValue(value: any) {
    this.selectedValue.set(value.name);
  }
}
