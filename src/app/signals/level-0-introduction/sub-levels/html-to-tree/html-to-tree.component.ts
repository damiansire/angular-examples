import { Component, computed, signal } from '@angular/core';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { NodeTreeComponent } from '../../../../components-draw/node-tree/node-tree.component';
import {
  Link,
  NodeTree,
} from '../../../../components-draw/components-draw.inferface';
import { CodeClick } from '../../../../components-atom/code/code.interface';
import { TreeComponent } from '../../../../components/tree/tree.component';

@Component({
  selector: 'app-html-to-tree',
  standalone: true,
  imports: [CodeComponent, NodeTreeComponent, TreeComponent],
  templateUrl: './html-to-tree.component.html',
  styleUrl: './html-to-tree.component.css',
})
export class HtmlToTreeComponent {
  htmlCode = ` <main> 
     <section> 
       <h2>  Introduction  </h2> 
       <p>  This is a simple example 
             of a DOM tree  </p> 
     </section> 
     <article> 
       <h3>  Article Title  </h3> 
       <p> Some interesting content </p> 
     </article> 
 </main> `;
  nodesToShow = signal<string[]>([]);
  codeClickHandler(event: CodeClick) {
    if (event.action == 'Select') {
      this.addNode(event.id);
    } else if (event.action == 'Deselect') {
      this.removeNode(event.id);
    }
  }
  addNode(id: string) {
    this.nodesToShow.update((currentNodes) => [...currentNodes, id]);
  }
  removeNode(id: string) {
    this.nodesToShow.update((currentNodes) =>
      currentNodes.filter((node) => node !== id)
    );
  }
  onParsedCodeHandler(lines: CodeLine[]) {}
}
