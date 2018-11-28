import {Component, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-accordion></ui-accordion>`,
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
  title = 'Accordion';
  items = [{
    headerText: 'tab1',
    bodyText: 'bodyText 1',
    isOpen: true
  }, {
    bodyText: 'bodyText 2',
    headerText: 'tab2'
  }, {
    bodyText: 'bodyText 3',
    headerText: 'tab3'
  }];
  constructor() {
  }

  ngOnInit() {
  }

}
