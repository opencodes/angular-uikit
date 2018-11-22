import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'ui-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @Input() width = '400px';
  @Input() height = '400px';
  @Output() clickChart = new EventEmitter();
  chart: any;
  private options: any;
  responsive = true;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const ctx = this.el.nativeElement.children[0].children[0].getContext('2d');
    const _that = this;
    Chart.plugins.register({
      afterDatasetsDraw: function (chartInstance, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chartInstance.chart.ctx;

        chartInstance.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function (element, index) {
              // Draw the text in black, with the specified font
              ctx.fillStyle = 'rgb(0, 0, 0)';

              var fontSize = 16;
              var fontStyle = 'normal';
              var fontFamily = 'Helvetica Neue';
              ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

              // Just naively convert to string for now
              var dataString = dataset.data[index].toString();

              // Make sure alignment settings are correct
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              var padding = 5;
              var position = element.tooltipPosition();
              ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            });
          }
        });
      }
    });
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset
      data: this.data,
      maintainAspectRatio: false,
      responsive: true,
      // Configuration options go here

      options: {
        onClick:function(e){
          let activePoints = _that.chart.getElementsAtEvent(e);
          let index = activePoints[0]._index;
          _that.clickChart.emit({y : this.data.datasets[0].data[index], x : this.data.labels[index]});
        },
        title: {
          display: true,
          text: 'My Title',
          fontSize: 16
        },
        legend: {
          enabled: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      },
      onClick:function(e){
        let activePoints = _that.chart.getElementsAtEvent(e);
        let selectedIndex = activePoints[0]._index;
        console.log(this.data.datasets[0].data[selectedIndex]);


      }
    });
  }

  onCanvasClick(e) {
    // if(this.chart) {
    //   let element = this.chart.getElementAtEvent(event);
    //   let dataset = this.chart.getDatasetAtEvent(event);
    //   if(element && element[0] && dataset) {
    //     this.clickChart.emit({originalEvent: event, element: element[0], dataset: dataset});
    //   }
    // }
  }

}
