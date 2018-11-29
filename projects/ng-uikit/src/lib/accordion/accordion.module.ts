import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionPanelHeaderComponent } from './accordion-panel-header/accordion-panel-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordionComponent, AccordionPanelComponent, AccordionPanelHeaderComponent],
  exports: [AccordionComponent, AccordionPanelComponent, AccordionPanelHeaderComponent]
})
export class AccordionModule { }
