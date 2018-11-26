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
  private pageCount: number;
  pages: any[];
  private pageNum: number=1;


  constructor(private _pgs: PagingService) {
  }

  ngOnInit() {
    this._pgs.size = this.size;
    this._pgs.totalCount = this.totalCount;
    this.pageCount = this._pgs.getListOfPage(this.totalCount);
    this.pages = Array(this.pageCount || 0);
    console.log(this.pages);
  }

  onPageChange(e) {
    console.log(e);
    this.pageNum = e;
    this.pageChange.emit({
      pageNum: e
    });
  }

}
