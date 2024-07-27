import { Component, signal } from '@angular/core';
import {
  NodeTree,
  Link,
} from '../../../../components-draw/components-draw.inferface';
import { NodeTreeComponent } from '../../../../components-draw/node-tree/node-tree.component';

@Component({
  selector: 'app-old-change-detection',
  standalone: true,
  imports: [NodeTreeComponent],
  templateUrl: './old-change-detection.component.html',
  styleUrl: './old-change-detection.component.css',
})
export class OldChangeDetectionComponent {
  step = signal(0);

  incrementStep() {
    if (this.step() < 3) {
      this.step.update((currentStep) => currentStep + 1);
    }
  }

  decrementStep() {
    if (this.step() > 0) {
      this.step.update((currentStep) => currentStep - 1);
    }
  }

  data = signal<NodeTree[]>([
    {
      name: 'main',
      x: 550,
      y: 100,
      color: this.step() > 0 ? '#90EE90' : '',
    },
    {
      name: 'article',
      x: 700,
      y: 300,
      color: this.step() > 1 ? '#90EE90' : '',
    },
    {
      name: 'section',
      x: 400,
      y: 300,
      color: this.step() > 1 ? '#90EE90' : '',
    },
    {
      name: 'h2',
      x: 300,
      y: 500,
      color: this.step() > 2 ? '#90EE90' : '',
    },
    {
      name: 'p',
      x: 500,
      y: 500,
      color: this.step() > 2 ? '#90EE90' : '',
    },
    {
      name: 'h3',
      x: 600,
      y: 500,
      color: this.step() > 2 ? '#90EE90' : '',
    },
    {
      name: 'p2',
      x: 800,
      y: 500,
      color: this.step() > 2 ? '#90EE90' : '',
    },
  ]);
  links = signal<Link[]>([
    {
      source: 'main',
      target: 'article',
    },
    {
      source: 'main',
      target: 'section',
    },
    {
      source: 'section',
      target: 'h2',
    },
    {
      source: 'section',
      target: 'p',
    },
    {
      source: 'article',
      target: 'h3',
    },
    {
      source: 'article',
      target: 'p2',
    },
  ]);
}
