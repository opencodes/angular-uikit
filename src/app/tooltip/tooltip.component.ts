import { Component, OnInit } from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-tooltip></ui-tooltip>`,
    properties: [{
      name: '',
      type: '',
      default: '',
      description: ''
    }],
    events: [{
      name: '',
      parameters: '',
      description: ''
    }],
    styling: [{
      selector: '',
      description: ''
    }]
  };
  language = 'html';
  title = 'Tooltip';

  constructor() {
  }

  ngOnInit() {
  }

}
