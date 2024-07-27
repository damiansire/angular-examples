import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import {
  NgxEchartsDirective,
  provideEcharts,
  NgxEchartsModule,
} from 'ngx-echarts';

@Component({
  selector: 'app-node-tree',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  providers: [provideEcharts()],
  templateUrl: './node-tree.component.html',
  styleUrl: './node-tree.component.css',
})
export class NodeTreeComponent {
  options: EChartsOption = {
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
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: [
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
        ],
        // links: [],
        links: [
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
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };
}
