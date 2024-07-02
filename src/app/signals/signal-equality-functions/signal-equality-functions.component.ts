import { Component, computed, effect, signal } from '@angular/core';
import { InputComponent } from '../../components-atom/input/input.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';

@Component({
  selector: 'app-signal-equality-functions',
  standalone: true,
  templateUrl: './signal-equality-functions.component.html',
  styleUrl: './signal-equality-functions.component.css',
  imports: [
    InputComponent,
    ButtonComponent,
    VariableBoxComponent,
    CodeComponent,
  ],
})
export class SignalEqualityFunctionsComponent {
  name = signal('dami');
  setName(event: string) {
    this.name.set(event);
  }
  linesName = computed<codeLine[]>(() => [
    { line: 'name = signal("dami");', active: false },
    { line: 'setName(event: string) {', active: false },
    { line: '  this.name.set(event);', active: false }, // Esta línea se ejecuta siempre dentro de la función
    { line: '}', active: false },
  ]);

  age = signal('26');
  setAge(event: string) {
    this.age.set(event);
  }
  linesAge = computed<codeLine[]>(() => [
    { line: 'age = signal("26");', active: false },
    { line: 'setAge(event: string) {', active: false },
    { line: '  this.age.set(event);', active: false }, // Similar a `linesName`
    { line: '}', active: false },
  ]);

  person = signal({ name: 'damian', surname: 'sire' });
  setPerson(personName: string, personSurname: string) {
    const newData = { name: personName, surname: personSurname };
    this.person.set(newData);
  }
  linesPerson = computed<codeLine[]>(() => [
    {
      line: 'person = signal({ name: "damian", surname: "sire" });',
      active: false,
    },
    {
      line: 'setPerson(personName: string, personSurname: string) {',
      active: false,
    },
    {
      line: '  const newData = { name: personName, surname: personSurname };',
      active: false,
    },
    { line: '  this.person.set(newData);', active: false },
    { line: '}', active: false },
  ]);

  data = signal(
    { name: 'damian' },
    {
      equal: (prev, element) => {
        return element.name === prev.name;
      },
    }
  );
  constructor() {
    effect(() => {
      console.log(this.data());
    });
  }
  setValue() {
    this.data.set({ name: 'pedro' });
  }
}
