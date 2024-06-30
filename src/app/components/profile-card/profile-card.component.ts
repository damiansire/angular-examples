import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

interface ClickInButton {
  date: Date;
  firstName: string;
  surname: string;
}

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  @Input() title = 'Persona';
  @ViewChild('firstNameInput') firstNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('surnameInput') surnameInput!: ElementRef<HTMLInputElement>;
  @Output() signalComputed = new EventEmitter<{
    date: Date;
    name: string;
    surname: string;
  }>();
  computedTracker: Date[] = [];
  clicksInTheButton: ClickInButton[] = [];
  firstName: WritableSignal<string> = signal('Damian');
  surname: WritableSignal<string> = signal('Sire');
  fullName: Signal<string> = computed(() => {
    return `${this.firstName()} ${this.surname()}`;
  });

  constructor() {
    effect(() => {
      const currentFullName = this.fullName();
      console.log('changed');
      this.signalComputed.emit({
        date: new Date(),
        name: this.firstName(),
        surname: this.surname(),
      });
    });
  }
  setValue() {
    const firstName = this.firstNameInput.nativeElement.value;
    const surname = this.surnameInput.nativeElement.value;
    this.firstName.set(firstName);
    this.surname.set(surname);
    this.clicksInTheButton.push({
      date: new Date(),
      firstName,
      surname,
    });
  }
}
