import {
  Component,
  ElementRef,
  Input,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  template: `
    <div class="profile-container">
      <h1>{{ title }}</h1>
      <div class="profile-info">
        <label for="firstName">Nombre:</label>
        <input type="text" placeholder="Name" #firstNameInput />
        <br />
        <label for="lastName">Apellido:</label>
        <input type="text" placeholder="Surname" #lastNameInput />
        <br />
        <button class="btn btn-primary" (click)="setValue()">Set</button>
      </div>
      <div class="profile-greeting">
        <p>Hola, {{ fullName() }}!</p>
      </div>
    </div>
  `,
  styles: `.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.profile-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.profile-greeting {
    font-size: 1.2em;
}`,
  styleUrls: [],
})
export class ProfileCardComponent {
  @Input() title = 'Persona';
  @ViewChild('firstNameInput') firstNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('lastNameInput') lastNameInput!: ElementRef<HTMLInputElement>;
  computedTracker: Date[] = [];

  firstName: WritableSignal<string> = signal('Damian');
  lastName: WritableSignal<string> = signal('Sire');
  fullName: Signal<string> = computed(() => {
    this.computedTracker.push(new Date());
    return `${this.firstName()} ${this.lastName()}`;
  });

  setValue() {
    const firstName = this.firstNameInput.nativeElement.value;
    const lastName = this.lastNameInput.nativeElement.value;
    this.lastName.set(firstName);
    this.firstName.set(lastName);
  }
}

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './computed-signals-lazily-evaluated-memoized.component.html',
  styleUrl: './computed-signals-lazily-evaluated-memoized.component.css',
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: Date[] = [];
}
