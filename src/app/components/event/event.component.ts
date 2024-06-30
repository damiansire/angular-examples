import { Component, Input } from '@angular/core';
import { ClickInButton } from '../component.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  @Input() event: ClickInButton = {
    date: new Date(),
    firstName: '',
    surname: '',
  };
}
