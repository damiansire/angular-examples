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
  lines = computed<CodeLine[]>(() =>
    [
      { line: `<main>`, active: false, id: 'main' },
      { line: `  <section>`, active: false, id: 'section' },
      { line: `    <h2>Introduction</h2>`, active: false, id: 'h2' },
      {
        line: `    <p>This is a simple example \n                
                 of a DOM tree</p>`,
        active: false,
        id: 'p',
      },

      { line: `  </section>`, active: false, id: 'section' },
      { line: `  <article>`, active: false, id: 'article' },
      { line: `    <h3>Article Title</h3>`, active: false, id: 'h3' },
      {
        line: `    <p>Some interesting content here.</p>`,
        active: false,
        id: 'p2',
      },
      { line: `  </article>`, active: false, id: 'article' },
      { line: `</main>`, active: false, id: 'main' },
    ].map((line) => ({
      ...line,
      active: this.data().some((dataItem) => dataItem.name === line.id),
    }))
  );
  data = signal<NodeTree[]>([]);
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
  baseElement = [
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
  ];
  lineClickHandler(event: string) {
    this.addElementToData(event);
  }
  addElementToData(name: string) {
    const existingElement = this.data().find((item) => item.name === name);
    if (!existingElement) {
      const newElement = this.baseElement.find((item) => item.name === name);
      if (newElement) {
        this.data.update((data) => [...data, newElement]);
      } else {
        console.warn(`Element with name "${name}" not found in baseElement.`);
      }
    }
  }
}
