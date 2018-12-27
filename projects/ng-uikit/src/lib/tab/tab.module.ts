import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import {DropdownModule} from "../dropdown/dropdown.module";

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [TabComponent, TabPanelComponent],
  exports: [TabComponent, TabPanelComponent]
})
export class TabModule { }
