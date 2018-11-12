import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  items: any[] = [{
    headerText: 'Header 1',
    bodyText: 'Body Text 1',
    isOpen: true
  }, {
    headerText: 'Header 1',
    bodyText: 'Body Text 2',
    isOpen: false
  }, {
    headerText: 'Header 1',
    bodyText: 'Body Text 3',
    isOpen: false
  }];

  constructor() {
  }

  ngOnInit() {
  }

  toggle(i) {
    this.items.forEach((item, index) => {
      this.items[index].isOpen = (index === i);
    });
  }

}
