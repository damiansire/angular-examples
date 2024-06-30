import { Component, Input } from '@angular/core';
import { ClickInButton } from '../component.interface';
import { CommonModule } from '@angular/common';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-click-history',
  standalone: true,
  templateUrl: './click-history.component.html',
  styleUrl: './click-history.component.css',
  imports: [CommonModule, EventComponent],
})
export class ClickHistoryComponent {
  @Input() clickHistory: ClickInButton[] = [];
}
