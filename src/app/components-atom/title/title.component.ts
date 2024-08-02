import { Component, Input } from '@angular/core';
import { TailwindTextSize } from '../../interfaces/tailwind-css.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() title: string = 'Missing Title';
  @Input() textSize: TailwindTextSize = 'text-4xl';
}
