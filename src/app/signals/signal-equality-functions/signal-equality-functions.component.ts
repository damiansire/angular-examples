import { Component, effect, signal } from '@angular/core';
import { InputComponent } from '../../components-atom/input/input.component';
import { ButtonComponent } from '../../components-atom/button/button.component';

@Component({
  selector: 'app-signal-equality-functions',
  standalone: true,
  templateUrl: './signal-equality-functions.component.html',
  styleUrl: './signal-equality-functions.component.css',
  imports: [InputComponent, ButtonComponent],
})
export class SignalEqualityFunctionsComponent {
  name = signal('');
  setName(event: string) {
    this.name.set(event);
  }
  age = signal('');
  setAge(event: string) {
    this.age.set(event);
  }

  person = signal({ name: '', age: '' });
  setPerson(personName: string, personAge: string) {
    const newData = { name: personName, age: personAge };
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
