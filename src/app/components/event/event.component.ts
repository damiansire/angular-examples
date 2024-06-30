import { Component, Input } from '@angular/core';
import { ClickInButton } from '../component.interface';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../icons/click.component';

@Component({
  selector: 'app-event',
  standalone: true,
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  imports: [CommonModule, SvgComponent],
})
export class EventComponent {
  @Input() event: ClickInButton = {
    date: new Date(),
    firstName: '',
    surname: '',
  };
}
