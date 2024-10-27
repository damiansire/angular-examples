import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../components-atom/title/title.component';

@Component({
  selector: 'app-two-column-layout',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './two-column-layout.component.html',
  styleUrl: './two-column-layout.component.css',
})
export class TwoColumnLayoutComponent {
  @Input() title = 'No Title';
}
