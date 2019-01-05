import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Codes} from "../shared/demo";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
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
  title = 'Card';
  jsonURL: string = '../assets/json/autocomplete.json';
  source = [
    {
      "name": "Rajesh",
      "code": "AF"
    },
    {
      "name": "Santan",
      "code": "AX"
    },
    {
      "name": "Bagish",
      "code": "AL"
    },
    {
      "name": "Sudhira",
      "code": "DZ"
    },
    {
      "name": "Pankaj",
      "code": "AS"
    }
  ];
  sourceArr = ["Rajesh", "Santan", "Bagish", "Sudhira", "Pankaj"];

  constructor() {
  }

  ngOnInit() {
  }

  onSelection(e) {
    console.log(e)
  }
}
