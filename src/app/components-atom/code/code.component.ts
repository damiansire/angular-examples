import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal } from '@angular/core';
import { CodeLine } from '../component-atom.interface';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
})
export class CodeComponent {
  @Input() lines: Signal<CodeLine[]> = signal([]);
}
