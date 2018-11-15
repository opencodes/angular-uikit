import { Component, OnInit } from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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
