import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() items: any[];

  constructor() {
  }

  ngOnInit() {
    this.items = this.items.map((item, index) => {
      console.log(index)
      item.isOpen = (index === 0);
      return item;
    });
  }

  toggle(i) {
    this.items = this.items.map((item, index) => {
      item.isOpen = (index === i);
      return item;
    });
  }

}
