import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column, Page, Paging} from './datatable.interface';
import {DatatableService} from './service/datatable.service';

@Component({
  selector: 'ui-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() rows;
  @Input() columns: Column;
  @Output() pageChange = new EventEmitter();
  @Output() sorted = new EventEmitter();
  @Input() size = 6;
  page: Page;

  constructor(private _dts: DatatableService) {
  }

  ngOnInit() {
    this.page = this._dts.getPageData(this.rows, this.size, 1);
  }

  getColumnClass(col: Column) {
    let className = ' ui-dt-cell ';
    if (col.className) {
      className += col.className + ' ';
    }
    if (col.sortable) {
      className += ' sortable';
    }
    return className;
  }


  onPageChange(e: Paging) {
    this.page = this._dts.getPageData(this.rows, this.size, e.pageNum);
  }
}
