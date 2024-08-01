import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Input,
  Signal,
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
  @Input() nodes: WritableSignal<NodeTree[]> | Signal<NodeTree[]> = signal<
    NodeTree[]
  >([]);
  @Input() links: WritableSignal<Link[]> = signal<Link[]>([]);
  @Input() title: string = '';
  chartOption = computed<EChartsOption>(() => ({
    title: {
      text: this.title,
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
        data: this.nodes(),
        itemStyle: {
          color: (params) => {
            const node = params.data as NodeTree;
            return node.color || '#5784C1';
          },
        },
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
