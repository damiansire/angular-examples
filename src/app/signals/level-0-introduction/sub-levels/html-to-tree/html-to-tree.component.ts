import { Component, computed, signal } from '@angular/core';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { TreeComponent } from '../../../../components-draw/tree/tree.component';
import { NodeTreeComponent } from '../../../../components-draw/node-tree/node-tree.component';
import {
  Link,
  NodeTree,
} from '../../../../components-draw/components-draw.inferface';

@Component({
  selector: 'app-html-to-tree',
  standalone: true,
  imports: [CodeComponent, TreeComponent, NodeTreeComponent],
  templateUrl: './html-to-tree.component.html',
  styleUrl: './html-to-tree.component.css',
})
export class HtmlToTreeComponent {
  lines = computed<CodeLine[]>(() => [
    { line: `<main>`, active: false },
    { line: `  <section>`, active: false },
    { line: `    <h2>Introduction</h2>`, active: false },
    {
      line: `    <p>This is a simple example \n                
                 of a DOM tree</p>`,
      active: false,
    },

    { line: `  </section>`, active: false },
    { line: `  <article>`, active: false },
    { line: `    <h3>Article Title</h3>`, active: false },
    { line: `    <p>Some interesting content here.</p>`, active: false },
    { line: `  </article>`, active: false },
    { line: `</main>`, active: false },
  ]);
  data = signal<NodeTree[]>([
    {
      name: 'main',
      x: 550,
      y: 100,
    },
    {
      name: 'article',
      x: 700,
      y: 300,
    },
    {
      name: 'section',
      x: 400,
      y: 300,
    },
    {
      name: 'h2',
      x: 300,
      y: 500,
    },
    {
      name: 'p',
      x: 500,
      y: 500,
    },
    {
      name: 'h3',
      x: 600,
      y: 500,
    },
    {
      name: 'p2',
      x: 800,
      y: 500,
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
