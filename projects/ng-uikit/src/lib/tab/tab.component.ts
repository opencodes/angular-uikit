import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {TabPanelComponent} from "./tab-panel/tab-panel.component";

@Component({
  selector: 'ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {
  @Input() optionTabAfter: number = 3;
  public tabs: any[];
  public optionTabs: any[];
  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  isShowDropdown: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  toggle(i) {
    this.tabPanels.forEach(tab => {
      tab.isOpen = (tab.index === i)
    });
  }

  ngAfterContentInit() {
    this.tabs = [];
    this.optionTabs = []
    let count = 0;
    this.tabPanels.map(tab => {
      const tabItem = {
        headerText: tab.header,
        index: tab.index,
        isOpen: !!tab
      };
      count++;
      this.optionTabAfter = (this.optionTabAfter >= this.tabPanels.length) ? this.tabPanels.length : this.optionTabAfter;
      if (count <= this.optionTabAfter) {
        this.tabs.push(tabItem);
      } else {
        this.optionTabs.push(tabItem);
      }
    });
    console.log(this.tabs, this.optionTabs)
  }


}
