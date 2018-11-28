import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {
  @Input() header;
  @Input() isOpen;
  index;

  constructor() {
  }

  ngOnInit() {
    this.index = Math.ceil(1000 * Math.random());
  }

  toggle(i) {
    this.isOpen = !this.isOpen ;
  }

}
