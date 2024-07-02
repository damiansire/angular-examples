import { Component, effect, signal } from '@angular/core';
import { InputComponent } from '../../components-atom/input/input.component';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';

@Component({
  selector: 'app-signal-equality-functions',
  standalone: true,
  templateUrl: './signal-equality-functions.component.html',
  styleUrl: './signal-equality-functions.component.css',
  imports: [InputComponent, ButtonComponent, VariableBoxComponent],
})
export class SignalEqualityFunctionsComponent {
  name = signal('dami');
  setName(event: string) {
    this.name.set(event);
  }
  age = signal('26');
  setAge(event: string) {
    this.age.set(event);
  }

  person = signal({ name: 'damian', surname: 'sire' });
  setPerson(personName: string, personSurname: string) {
    const newData = { name: personName, surname: personSurname };
    this.person.set(newData);
  }

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
