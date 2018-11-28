import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'ui-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit, OnChanges {

  @Input() header;
  @Input() isOpen;
  index;

  constructor() {
  }

  ngOnChanges(){
    if(this.isOpen){
      console.log(this.isOpen);
    }
  }

  ngOnInit() {
    this.index = Math.ceil(1000 * Math.random());
  }



}
