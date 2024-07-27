import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import {
  NgxEchartsDirective,
  provideEcharts,
  NgxEchartsModule,
} from 'ngx-echarts';
import { Link, NodeTree } from '../components-draw.inferface';

@Component({
  selector: 'app-node-tree',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  providers: [provideEcharts()],
  templateUrl: './node-tree.component.html',
  styleUrl: './node-tree.component.css',
})
export class NodeTreeComponent {
  @Input() data: WritableSignal<NodeTree[]> = signal<NodeTree[]>([]);
  @Input() links: WritableSignal<Link[]> = signal<Link[]>([]);
  chartOption = computed<EChartsOption>(() => ({
    title: {
      text: 'Simple Graph',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['rect', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: this.data(), // Unwrap the signals here
        links: this.links(),
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  }));
}
