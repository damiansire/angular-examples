import { Component, Input } from '@angular/core';
import { ClickInButton } from '../component.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-click-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './click-history.component.html',
  styleUrl: './click-history.component.css',
})
export class ClickHistoryComponent {
  @Input() clickHistory: ClickInButton[] = [];
}
