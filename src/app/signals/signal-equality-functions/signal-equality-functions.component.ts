import { Component, computed, effect, signal } from '@angular/core';
import { InputComponent } from '../../components-atom/input/input.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';
import { EventHistoryComponent } from '../../components/event-history/event-history.component';
import { HistoryElement } from '../../components/component.interface';
import { SelectionOptionComponent } from '../../components/selection-option/selection-option.component';

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
    EventHistoryComponent,
    SelectionOptionComponent,
  ],
})
export class SignalEqualityFunctionsComponent {
  currentLevel = signal('Nivel 1');
  appEventHistory = signal<HistoryElement[]>([
    {
      date: new Date(),
      trigger: 'test',
      newState: 'test',
      isCountIncrement: false,
    },
  ]);

  exampleData = signal({
    name: '',
    age: '',
    person: {
      name: '',
      surname: '',
    },
  });

  saveInHiddenVariableInputData(event: any, inputName: string) {
    if (inputName === 'name') {
      this.exampleData.update((data) => {
        data.name = event;
        return data;
      });
    } else if (inputName === 'age') {
      this.exampleData.update((data) => {
        data.age = event;
        return data;
      });
    } else if (inputName === 'person.name') {
      this.exampleData.update((data) => {
        data.person.name = event;
        return data;
      });
    } else if (inputName === 'person.surname') {
      this.exampleData.update((data) => {
        data.person.surname = event;
        return data;
      });
    }
  }

  name = signal('dami');
  linesName = computed<codeLine[]>(() => [
    { line: 'name = signal("dami");', active: false },
    { line: 'setName(event: string) {', active: false },
    { line: '  this.name.set(event);', active: false }, // Esta línea se ejecuta siempre dentro de la función
    { line: '}', active: false },
  ]);

  age = signal('26');
  linesAge = computed<codeLine[]>(() => [
    { line: 'age = signal("26");', active: false },
    { line: 'setAge(event: string) {', active: false },
    { line: '  this.age.set(event);', active: false }, // Similar a `linesName`
    { line: '}', active: false },
  ]);

  person = signal({ name: 'damian', surname: 'sire' });
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

  addConditionalCountRecomputation(
    trigger: string,
    newState: number | string,
    isCountIncrement: boolean
  ) {
    this.appEventHistory.update((prevHistory) => {
      const newHistory = prevHistory.length ? [...prevHistory] : [];
      newHistory.push({
        date: new Date(),
        trigger,
        newState,
        isCountIncrement,
      });
      return newHistory;
    });
  }

  setData(event: string) {
    if (event === 'name') {
      if (this.name() != this.exampleData().name) {
        this.addConditionalCountRecomputation('interval', event, false);
      }
      this.name.set(this.exampleData().name);
    } else if (event === 'age') {
      if (this.age().toString() != this.exampleData().age.toString()) {
        this.addConditionalCountRecomputation('interval', event, false);
      }
      this.age.set(this.exampleData().age);
    } else if (event === 'person') {
      this.person.set(this.exampleData().person);
      this.addConditionalCountRecomputation('interval', event, false);
    }
  }

  selectedLevelChange(newLevel: string) {
    this.currentLevel.set(newLevel);
  }
  constructor() {}
}
