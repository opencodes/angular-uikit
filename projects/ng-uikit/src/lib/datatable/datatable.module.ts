import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatatableComponent} from './datatable.component';
import {PaginationComponent} from './pagination/pagination.component';
import {DatatableService} from "./service/datatable.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DatatableService],
  declarations: [DatatableComponent, PaginationComponent],
  exports: [DatatableComponent, PaginationComponent]
})
export class DatatableModule {
}
