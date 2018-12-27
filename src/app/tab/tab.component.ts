import {Component, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-tab></ui-tab>`,
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
  title = 'Tab';
  items = [{
    headerText: 'tab1',
    bodyText: 'bodyText 1',
    isOpen: true
  }, {
    bodyText: 'bodyText 2',
    headerText: 'tab2'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
