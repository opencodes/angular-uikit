import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {TabPanelComponent} from "./tab-panel/tab-panel.component";

@Component({
  selector: 'ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {

  public tabs: any[];

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  constructor() {
  }

  ngOnInit() {

  }

  toggle(i) {
    this.tabPanels.forEach(tab => {
      tab.isOpen = (tab.index === i)
    });
  }

  ngAfterContentInit() {
    this.tabs = this.tabPanels.map(tab => {
      return {
        headerText: tab.header,
        index: tab.index,
        isOpen: !!tab
      }
    });
  }


}
