import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {AccordionPanelHeaderComponent} from "../accordion-panel-header/accordion-panel-header.component";

@Component({
  selector: 'ui-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {
  @Input() header;
  @Input() isOpen;
  index;
  @ContentChildren(AccordionPanelHeaderComponent) headerComponent: QueryList<AccordionPanelHeaderComponent>;
  constructor() {
  }
  get hasHeader(): boolean {
    return this.headerComponent && this.headerComponent.length > 0;
  }
  ngOnInit() {
    this.index = Math.ceil(1000 * Math.random());
  }

  toggle(i) {
    this.isOpen = !this.isOpen ;
  }

}
