import { Injectable } from '@angular/core';
import {Page} from "../datatable.interface";

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor() { }

  getPageData(rows, size, pageNum): Page {
    const start = (pageNum - 1) * size;
    const last = (start + size) > rows.length ? rows.length : start + size;
    return {
      startIndex: start,
      rows: rows.slice(start, last),
      lastIndex: last
    };
  }
}
