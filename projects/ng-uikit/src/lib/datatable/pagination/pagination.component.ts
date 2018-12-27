import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PagingService} from '../service/paging.service';

@Component({
  selector: 'ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number;
  @Input() size = 10;
  @Output() pageChange = new EventEmitter();

  pageCount: number;
  pages: any[];
  pageNum: number = 1;
  totalPages: any[];
  displayNumbers: number = 5;
  lastPage: number = 5;

  constructor(private _pgs: PagingService) {
  }

  ngOnInit() {
    this._pgs.size = this.size;
    this._pgs.totalCount = this.totalCount;
    this.pageCount = this._pgs.getListOfPage(this.totalCount);
    this.totalPages = Array(this.pageCount).fill(0).map((e, i) => i + 1);
    this.pages = this.totalPages.slice(0, 5);
    this.lastPage = this.pages[this.displayNumbers - 1];
  }

  onPageChange(e) {
    console.log(e);
    this.pageNum = e;
    this.pageChange.emit({
      pageNum: e
    });
  }

  shiftBoundary() {
    const lastPage = this.pages[this.displayNumbers - 1];
    this.pages = this.totalPages.slice(lastPage, lastPage + 5);
    this.lastPage = this.pages[this.displayNumbers - 1];
  }

  next() {
    this.pageNum++;
    if (this.pageNum > this.lastPage) this.shiftBoundary();
  }

  prev() {
    this.pageNum--;
    if (this.pageNum > this.lastPage) this.shiftBoundary();
  }
}
