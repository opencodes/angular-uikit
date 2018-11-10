import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {DatepickerComponent} from './datepicker.component';
import {DropdownModule} from '../dropdown/dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DropdownModule
  ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule {
}
