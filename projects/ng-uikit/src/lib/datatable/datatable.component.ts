import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {Column} from "./datatable.interface";

@Component({
  selector: 'ui-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() rows;
  @Input() columns: Column;
  @Output() page = new EventEmitter();
  @Output() sorted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getColumnClass(col: Column) {
    let className = " ui-dt-cell ";
    if (col.className) {
      className += col.className + ' ';
    }
    if (col.sortable){
      className += ' sortable'
    }
    return className;
  }
}
