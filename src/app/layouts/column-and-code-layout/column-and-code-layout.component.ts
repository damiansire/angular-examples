import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../components-atom/title/title.component';

@Component({
  selector: 'app-column-and-code-layout',
  standalone: true,
  templateUrl: './column-and-code-layout.component.html',
  styleUrl: './column-and-code-layout.component.css',
  imports: [TitleComponent],
})
export class ColumnAndCodeLayoutComponent {
  @Input() title = 'No Title';
}
