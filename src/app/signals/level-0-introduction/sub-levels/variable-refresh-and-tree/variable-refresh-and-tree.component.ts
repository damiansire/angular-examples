import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../../components-atom/title/title.component';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { TreeComponent } from '../../../../components/tree/tree.component';
import { CountIncrementComponent } from './count-increment/count-increment.component';
import { ButtonComponent } from '../../../../components-atom/button/button.component';
import { CodeClick } from '../../../../components-atom/code/code.interface';

@Component({
  selector: 'app-variable-refresh-and-tree',
  standalone: true,
  imports: [
    TitleComponent,
    CodeComponent,
    TreeComponent,
    CountIncrementComponent,
    ButtonComponent,
  ],
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
</section>`;
  htmlAngularCode = `<section>
  <section>
    <p>
      <span> El valor es: </span>
      <span> {{ count }} </span>
    </p>
    <button (click)="increment()"> Increment </button>
  </section>
  <section>
    <p> Multiplo de 2: {{ count % 2 ? "No" : "Si" }} </p>
    <p> Multiplo de 3: {{ count % 3 ? "No" : "Si" }} </p>
  </section>
</section>`;
  nodesToShow = signal<string[]>([]);
  sliderNumber = 0;
  nextSlider() {
    this.sliderNumber++;
    this.sliderNumber = this.sliderNumber % 4;
  }
  beforeSlider() {
    this.sliderNumber--;
    if (this.sliderNumber === -1) {
      this.sliderNumber = 3;
    }
  }
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
}
