import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { codeLine } from '../component-atom.interface';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
})
export class CodeComponent {
  @Input() lines: codeLine[] = [];
}
