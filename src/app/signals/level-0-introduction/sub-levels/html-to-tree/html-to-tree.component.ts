import { Component, computed } from '@angular/core';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { TreeComponent } from '../../../../components-draw/tree/tree.component';
import { NodeTreeComponent } from '../../../../components-draw/node-tree/node-tree.component';

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
}
