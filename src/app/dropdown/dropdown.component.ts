import {Component, Input, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';

export interface Item {
  url: string;
  text: string;
  isDivider: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  items = [
    {
      url: '',
      text: 'fsdf'
    }
  ];
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-modal></ui-modal>`,
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
  title = 'Modal';

  constructor() {
  }

  ngOnInit() {
  }

}
