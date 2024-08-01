import { Component, computed, effect, input, signal } from '@angular/core';
import { NodeTreeComponent } from '../../components-draw/node-tree/node-tree.component';
import {
  Link,
  NodeTree,
} from '../../components-draw/components-draw.inferface';
import { generateLinks } from '../../libs/code-parser';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [NodeTreeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
  htmlCode = input<string>('');
  nodesToShow = input<string[]>([]);
  nodesData: NodeTree[] = [
    {
      id: 'main-1',
      name: 'main',
      x: 550,
      y: 100,
    },
    {
      id: 'article-1',
      name: 'article',
      x: 700,
      y: 300,
    },
    {
      id: 'section-1',
      name: 'section',
      x: 400,
      y: 300,
    },
    {
      id: 'h2-1',
      name: 'h2',
      x: 300,
      y: 500,
    },
    {
      id: 'p-1',
      name: 'p',
      x: 500,
      y: 500,
    },
    {
      id: 'h3-1',
      name: 'h3',
      x: 600,
      y: 500,
    },
    {
      id: 'p-2',
      name: 'p2',
      x: 800,
      y: 500,
    },
  ];
  nodes = computed(() => {
    return this.nodesData.filter((node) =>
      this.nodesToShow().includes(node.id)
    );
  });
  links = signal<Link[]>([]);
  constructor() {
    effect(
      () => {
        const links = generateLinks(this.htmlCode());
        this.links.set(links);
      },
      { allowSignalWrites: true }
    );
  }
}
