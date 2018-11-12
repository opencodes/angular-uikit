import {Component, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-card></ui-card>`,
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
  title = 'Datepicker';
  selectedDateFrom: any;
  selectedDateTo: any;
  interpolate = {
    language: 'language interpolated'
  };

  constructor() {
  }

  ngOnInit() {
  }


  onSelectFrom(e) {
    this.selectedDateFrom = '' + JSON.stringify(e) + '';
  }

  onSelectTo(e) {
    this.selectedDateTo = '' + JSON.stringify(e) + '';
  }

}
