import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  items = [
    {
      url: 'a',
      text: 'Action',
      isDivider: true
    },
    {
      url: 'a',
      text: 'Another action'
    },
    {
      url: 'a',
      text: 'Something else here'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
