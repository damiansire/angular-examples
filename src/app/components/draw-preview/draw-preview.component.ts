import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-draw-preview',
  standalone: true,
  imports: [],
  templateUrl: './draw-preview.component.html',
  styleUrl: './draw-preview.component.css',
})
export class DrawPreviewComponent {
  @Input() imgUrl: string = '';
}
