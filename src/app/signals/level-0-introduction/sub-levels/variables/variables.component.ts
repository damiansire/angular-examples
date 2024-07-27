import { Component, computed, signal } from '@angular/core';
import { VariableBoxDrawComponent } from '../../../../components-draw/variable-box-draw/variable-box-draw.component';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';

interface DataTypeExample {
  name: string;
  examples: string[];
}

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [VariableBoxDrawComponent, CodeComponent],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css',
})
export class VariablesComponent {
  dataTypes = ['Number'];
  typesExamples: { [key: string]: DataTypeExample } = {
    Number: {
      name: 'Number',
      examples: ['1', '6', '56', '5.4', '10.1'],
    },
    String: {
      name: 'String',
      examples: ['A', 'B', 'C', 'Hello', 'Count$'],
    },
    Boolean: {
      name: 'Boolean',
      examples: ['true', 'false'],
    },
    Object: {
      name: 'Object',
      examples: [
        '{}',
        '{name: "Damian"}',
        '{name: "Damian", surname: "Sire", age : 26}',
      ],
    },
    Array: {
      name: 'Array',
      examples: [
        '[]',
        '[1,2,3,4,5]',
        '[true, false]',
        '[ 1 , 2 , true , {name : "damian"} ]',
      ],
    },
  };
  selectedType = signal(this.typesExamples['Number']);
  selectedExampleValue = signal(this.selectedType().examples[0]);
  lines = computed<CodeLine[]>(() => [
    { line: `var value = ${this.selectedExampleValue()}`, active: false },
    {
      line: `const value = ${this.selectedExampleValue()}`,
      active: false,
    },
    { line: `let value = ${this.selectedExampleValue()}`, active: false },
  ]);

  ngOnInit() {
    this.dataTypes = Object.keys(this.typesExamples);
  }

  selectExample(value: any) {
    this.selectedExampleValue.set(value.name);
  }

  selectType(value: any) {
    const variableName: string = value.name;
    const newSelectedType = this.typesExamples[variableName];
    this.selectedType.set(newSelectedType);
  }
}
