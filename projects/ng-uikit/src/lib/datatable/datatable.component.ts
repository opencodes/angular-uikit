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
  size = 6;
  page: Page;
  search: any = {};

  constructor(private _dts: DatatableService) {
  }

  ngOnInit() {
    this.page = this._dts.getPageData(this.rows, this.size, 1);
    console.log(this.page);
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

  sort(item) {
    this.page.rows.sort(this.dynamicSort(item.field));
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].toString().localeCompare(a[property]);
      } else {
        return a[property].toString().localeCompare(b[property]);
      }
    };
  }

  filter(event, field, val) {
    if (val.toString().length) {
      if (event.keyCode === 13 || event.which === 13) {
        this.search = {};
        this.search[field] = val;
        console.log(field, this.search, this.rows);
        const rows = [];
        this.rows.forEach((item) => {
          if (item[field].toString().toLowerCase().indexOf(val.toString().toLowerCase()) !== -1) {
            rows.push(item);
          }
        });
        this.page = this._dts.getPageData(rows, this.size, 1);
      }
    } else {
      this.page = this._dts.getPageData(this.rows, this.size, 1);
    }
  }

  changeFilter(val) {
    if (val) {

    }
  }
}
