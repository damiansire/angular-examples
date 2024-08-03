import { Component } from '@angular/core';
import { TitleComponent } from '../../../../components-atom/title/title.component';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { TreeComponent } from '../../../../components/tree/tree.component';

@Component({
  selector: 'app-variable-refresh-and-tree',
  standalone: true,
  imports: [TitleComponent, CodeComponent, TreeComponent],
  templateUrl: './variable-refresh-and-tree.component.html',
  styleUrl: './variable-refresh-and-tree.component.css',
})
export class VariableRefreshAndTreeComponent {
  htmlCode = `<section>
  <section>
    <p>
      <span> El valor es: </span>
      <span id="count"> 0 </span>
    </p>
    <button> Increment </button>
  </section>
  <section>
    <p> Multiplo de 2: <span>Si</span></p>
    <p> Multiplo de 3: <span>Si</span></p>
  </section>
</section>  `;
  htmlAngularCode = `<section>
  <section>
    <p>
      <span> El valor es: </span>
      <span id="count"> {{ count }} </span>
    </p>
    <button (click)="increment()"> Increment </button>
  </section>
  <section>
    <p> Multiplo de 2: <span>Si</span></p>
    <p> Multiplo de 3: <span>Si</span></p>
  </section>
</section>  `;
  selectedHtmlCode = this.htmlCode;
  count = 0;
  increment() {
    this.count++;
  }
  toggleHtmlCodeSelection() {
    this.selectedHtmlCode =
      this.selectedHtmlCode == this.htmlCode
        ? this.htmlAngularCode
        : this.htmlCode;
  }
}
